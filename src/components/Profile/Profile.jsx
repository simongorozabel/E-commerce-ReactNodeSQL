import { useGetUser } from "../../hooks/queries/useGetUser";
import { useGetCart } from "../../hooks/queries/useGetCart";

import "./Profile.css";

const Profile = () => {
  const user = useGetUser().data;
  const { data, isLoading, isError, error } = useGetCart();

  if (isLoading) {
    return <div className="profileLoading">Profile is Loading...</div>;
  }
  if (isError) return <p>{error.message ?? "Could not load Profile"}</p>;

  return (
    <>
      <div className="profileData__container">
        <figure className="profile__figure">
          <img src="" alt="👤" />
        </figure>
        <div className="profileData">
          <h3 className="name">
            {user?.firstName} {user?.lastName}
          </h3>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="profileCart__container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "28px",
            color: "lightcoral",
          }}
        >
          Your Cart
        </h2>
        {!data.length && (
          <p style={{ margin: "20px" }}>Shopping Cart Empty...</p>
        )}
        {Boolean(data.length) && (
          <ul className="profileCart__ul">
            {data?.map((cartProduct) => (
              <li className="profileCart__li" key={cartProduct.id}>
                <div>
                  <img
                    width={"100%"}
                    src={cartProduct?.product?.images[0]?.url}
                    alt={cartProduct?.product?.title}
                  />
                  <header className="cartProductHeader">
                    <h3 className="cartProductTitle">
                      {cartProduct?.product?.title}
                    </h3>
                    <h6 style={{ color: "#9999" }}>
                      {cartProduct?.product?.brand}
                    </h6>
                  </header>
                  <div className="profileCart__total">
                    <b>Total:</b> ${" "}
                    {cartProduct.quantity * cartProduct.product.price}{" "}
                    <code>USD</code>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="profilePurchases__container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "28px",
            color: "lightcoral",
          }}
        >
          Your Purchases
        </h2>
      </div>
    </>
  );
};

export default Profile;
