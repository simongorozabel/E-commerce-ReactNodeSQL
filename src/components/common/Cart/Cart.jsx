import { useGetCart } from "../../../hooks/queries/useGetCart";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";

const Cart = ({ isVisible }) => {
  const { data, isLoading, isError, error } = useGetCart();

  const toggleCart = isVisible
    ? "wrapper-cart"
    : "wrapper-cart wrapper-cart--hidden";

  if (isLoading) return <p>Loading Cart...</p>;
  if (isError) return <p>{error.message ?? "Could not load Cart"}</p>;
  return (
    <div className={toggleCart}>
      <aside>
        <h2 style={{ margin: "5px" }}>Shopping Cart</h2>
        {!data.length && (
          <p style={{ margin: "20px" }}>Shopping Cart Empty...</p>
        )}
        {Boolean(data.length) && (
          <ul>
            {data.map((cartProduct) => (
              <li key={cartProduct.id}>
                <CartProduct cartProduct={cartProduct} />
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
};

export default Cart;
