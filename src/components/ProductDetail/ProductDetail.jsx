import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useProductById } from "../../hooks/queries/useGetProductById";

import { useState } from "react";
const ProductDetail = () => {
  const { productId } = useParams();
  const { data, isLoading, isError, error } = useProductById(productId);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    const newQuantity = quantity + 1;
    const stock = 10;
    if (newQuantity <= stock) setQuantity(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) setQuantity(newQuantity);
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
              <p style={{ fontSize: "25px", color: "lightblue" }}>
                <em>$ {data.price} USD</em>
              </p>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "silver" }}>Quantity</h3>
              <div className="productDetail__button__container">
                <button className="productDetail__button" onClick={decrement}>
                  -
                </button>
                <span style={{ color: "lightcoral" }}>{quantity}</span>
                <button onClick={increment} className="productDetail__button">
                  +
                </button>
              </div>
            </div>

            <button
              style={{
                borderColor: "lightcoral",
                padding: "20px",
                width: "250px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                cursor: "pointer",
                color: "lightcoral",
                fontSize: "25px",
              }}
            >
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
