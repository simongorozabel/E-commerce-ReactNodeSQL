import { useGetCart } from "../../../hooks/queries/useGetCart";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";

const Cart = ({ isVisible, updateCardVisible }) => {
  const { data, isLoading, isError, error } = useGetCart();

  const reducer = (acc, cartProduct) => {
    const quantity = Number(cartProduct.quantity);
    const price = Number(cartProduct.product.price);
    return acc + quantity * price;
  };
  const total = data?.reduce(reducer, 0);

  const toggleCart = isVisible
    ? "wrapper-cart"
    : "wrapper-cart wrapper-cart--hidden";

  if (isLoading) return null;
  if (isError) return <p>{error.message ?? "Could not load Cart"}</p>;
  return (
    <div className={toggleCart}>
      <aside className="cartAside__container">
        <div className="cartAsideHeader">
          <h2>Shopping Cart</h2>
          <i onClick={updateCardVisible} className="bx bx-x-circle"></i>
        </div>
        {!data.length && (
          <p style={{ margin: "20px" }}>Shopping Cart Empty...</p>
        )}
        {Boolean(data.length) && (
          <ul className="cartAsideList__ul">
            {data.map((cartProduct) => (
              <li className="cartAsideList__li" key={cartProduct.id}>
                <CartProduct cartProduct={cartProduct} />
              </li>
            ))}
          </ul>
        )}
        <div className="cartAsideTotal__container">
          <div className="cartAsideTotalDiv">
            <h3 className="cartAsideTotalH3">Total:</h3>
            <p className="cartAsideTotal">$ {total}</p>
          </div>
          <button className="cartAsideTotalButton">Checkout</button>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
