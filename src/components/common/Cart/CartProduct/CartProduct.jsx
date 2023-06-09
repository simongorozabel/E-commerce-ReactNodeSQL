import "./CartProduct.css";
const CartProduct = ({ cartProduct }) => {
  console.log(cartProduct.product);
  return (
    <article className="cartProduct__container">
      <div className="cartProduct__imageContainer">
        <img
          src={cartProduct.product.images[0].url}
          alt={cartProduct.product.title}
        />
      </div>

      <div className="cartProduct__details">
        <header>
          <h4 style={{ fontSize: "14px", fontWeight: "900" }}>
            {cartProduct.product.title}
          </h4>
          <button className="cartProduct__trashButton">
            <i className="bx bx-trash"></i>
          </button>
        </header>

        <div className="cartProduct__changeCartButton">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </article>
  );
};

export default CartProduct;
