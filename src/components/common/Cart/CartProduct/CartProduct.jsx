import "./CartProduct.css";
const CartProduct = ({ cartProduct }) => {
  const increment = () => {
    const newQuantity = cartProduct.quantity + 1;

    const stock = 10;

    if (newQuantity <= stock) setQuantity(newQuantity);
  };

  const decrement = () => {
    const newQuantity = cartProduct.quantity - 1;

    if (newQuantity >= 1) setQuantity(newQuantity);
  };
  return (
    <article className="cartProduct__container">
      <div className="cartProduct__imageContainer">
        <img
          src={cartProduct.product.images[2].url}
          alt={cartProduct.product.title}
        />
        <button className="cartProduct__trashButton">
          <i className="bx bx-trash"></i>
        </button>
      </div>

      <div className="cartProduct__details">
        <header>
          <h4 style={{ fontSize: "14px", fontWeight: "900" }}>
            {cartProduct.product.title}
          </h4>
        </header>

        <div className="cartProduct__changeCartButton">
          <button onClick={decrement}>-</button>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <em>Total:</em> <b>{cartProduct.quantity}</b>
          </span>
          <button onClick={increment}>+</button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "5px",
          border: "1px solid #333",
          borderRadius: "5px",
        }}
      >
        <p>
          <b>Total:</b> $ {cartProduct.quantity * cartProduct.product.price} USD
        </p>
      </div>
    </article>
  );
};

export default CartProduct;
