import { useGetCart } from "../../../hooks/queries/useGetCart";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";

const Cart = ({ isVisible, updateCardVisible }) => {
  const { data, isLoading, isError, error } = useGetCart();

  const toggleCart = isVisible
    ? "wrapper-cart"
    : "wrapper-cart wrapper-cart--hidden";

  if (isLoading) return <p>Loading Cart...</p>;
  if (isError) return <p>{error.message ?? "Could not load Cart"}</p>;
  return (
    <div className={toggleCart}>
      <aside>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",

            width: "100%",
          }}
        >
          <h2
            style={{
              padding: "10px",
              border: "2px solid black",
              borderRadius: "5px",
              backgroundColor: "lightblue",
              fontWeight: "900",
            }}
          >
            Shopping Cart
          </h2>
          <i onClick={updateCardVisible} className="bx bx-x-circle"></i>
        </div>
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
