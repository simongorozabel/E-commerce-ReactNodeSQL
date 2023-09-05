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
      <div className="productDetail__img__container">
        {data?.images?.map((x) => {
          return (
            <img
              className="productDetailImg"
              key={x}
              src={x.url}
              alt={data.title}
            />
          );
        })}
      </div>

      <div className="productDetail__detail__container">
        <div className="productDetailHeader">
          <h2>{data.title}</h2>
          <h5>{data.brand}</h5>
        </div>
        <div className="productDetailDescription">
          <p>{data?.description}</p>
        </div>

        <div className="productDetailPrice">
          <p>
            <em>
              $ {data.price} <code>USD</code>
            </em>
          </p>
        </div>

        <div className="productDetailAddToCart">
          <button onClick={handleAddCart} className="addToCartButton">
            Add to Cart
          </button>
        </div>

        <div className="productDetailQuantity">
          <div className="productDetailTotal">
            <h4>Total:</h4>
            <em>$ {data.price * quantity}</em>
            <code>USD</code>
          </div>

          <div className="productDetail__button__container">
            <button className="productDetail__button" onClick={decrement}>
              -
            </button>
            <div className="productDetail__quantity">{quantity}</div>
            <button onClick={increment} className="productDetail__button">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
