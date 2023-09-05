import { useState } from "react";
import { useUpdateCart } from "../../../../hooks/queries/useUpdateCart";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./CartProduct.css";
const CartProduct = ({ cartProduct }) => {
  const initialQuantity = Number(cartProduct.quantity);

  const navigate = useNavigate();
  const { isLoading, mutate } = useUpdateCart();
  const [quantity, setQuantity] = useState(initialQuantity);
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

  const handleUpdate = () => {
    if (isLogged === false) {
      navigate("/login");
    } else {
      mutate({ cartProductId: cartProduct.id, newQuantity: quantity });
    }
  };

  return (
    <article className="cartProduct__container">
      <div className="cartProduct__imageContainer">
        <img
          width={"100%"}
          src={cartProduct?.product?.images[0]?.url}
          alt={cartProduct?.product?.title}
        />
        <button className="cartProduct__trashButton">
          <i className="bx bx-trash"></i>
        </button>
      </div>

      <header className="cartProductHeader">
        <h3 className="cartProductTitle">{cartProduct?.product?.title}</h3>
        <h6 style={{ color: "#9999" }}>{cartProduct?.product?.brand}</h6>
      </header>

      <div className="cartProduct__details">
        <div style={{ width: "200px" }}>
          <b>Total:</b> <br /> $ {quantity * cartProduct.product.price}{" "}
          <code>USD</code>
        </div>
        <div className="cartProductButtons">
          <button className="cartProductButton" onClick={decrement}>
            -
          </button>
          <div className="cartProduct__quantity">{quantity}</div>
          <button className="cartProductButton" onClick={increment}>
            +
          </button>
        </div>
        {initialQuantity !== quantity && (
          <button
            onClick={handleUpdate}
            disabled={isLoading}
            className={`updateCart__button ${isLoading ? "isLoading" : ""}`}
          >
            Update Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default CartProduct;
