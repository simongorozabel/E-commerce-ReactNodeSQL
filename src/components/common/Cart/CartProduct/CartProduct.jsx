const CartProduct = ({ cartProduct }) => {
  return (
    <article>
      <div>
        <img src={cartProduct.product[0].url} alt="" />
        <img src={cartProduct.product[1].rl} alt="" />
        <img src={cartProduct.product[2].rl} alt="" />
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
