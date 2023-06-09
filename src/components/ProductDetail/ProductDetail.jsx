import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useProductById } from "../../hooks/queries/useGetProductById";
import { useAddProductToCart } from "../../hooks/queries/useAddProductToCart";

import { useState } from "react";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { mutate } = useAddProductToCart();
  const { data, isLoading, isError, error } = useProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const isLogged = useSelector((store) => store.auth.isLogged);

  const increment = () => {
    const newQuantity = quantity + 1;
    const stock = 10;
    if (newQuantity <= stock) setQuantity(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const handleAddCart = () => {
    if (isLogged)
      mutate({
        quantity,
        productId,
      });
    if (isLogged === false) navigate("/login");
  };

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>{error.message ?? "Can't load product"}</p>;
  return (
    <section className="productDetail__container">
      <section>
        <div className="productDetail__img__container">
          <img src={data.images[0].url} alt={data.title} />
          <img src={data.images[1].url} alt={data.title} />
          <img src={data.images[2].url} alt={data.title} />
        </div>

        <div className="productDetail__detail__container">
          <h3 style={{ color: "silver" }}>{data.brand}</h3>
          <h2 style={{ color: "silver" }}>{data.title}</h2>
          <p>{data.description}</p>
          <div>
            <div style={{ margin: "20px" }}>
              <h3 style={{ color: "silver" }}>Price</h3>
              <p style={{ fontSize: "25px", color: "lightsalmon" }}>
                <em>$ {data.price} USD</em>
              </p>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "silver" }}>Quantity</h3>
              <div className="productDetail__button__container">
                <button className="productDetail__button" onClick={decrement}>
                  -
                </button>
                <span style={{ color: "lightsalmon" }}>{quantity}</span>
                <button onClick={increment} className="productDetail__button">
                  +
                </button>
              </div>
            </div>

            <button onClick={handleAddCart} className="addToCartButton">
              Add to cart
              <i className="bx bxs-cart-add"></i>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetail;
