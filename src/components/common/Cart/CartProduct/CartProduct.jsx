import "./CartProduct.css";
const CartProduct = ({ cartProduct }) => {
  console.log(cartProduct.product);
  return (
    <article className="cartProduct__container">
      <div>
        <img src={cartProduct.product.images[0].url} alt="" />
        <img src={cartProduct.product.images[1].url} alt="" />
        <img src={cartProduct.product.images[2].url} alt="" />
      </div>

      <div>
        <header>
          <h4>{cartProduct.product.title}</h4>
          <button>TrashIcon</button>
        </header>
      </div>

      <div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </article>
  );
};

export default CartProduct;
