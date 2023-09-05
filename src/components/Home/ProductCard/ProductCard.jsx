import { Link, useNavigate } from "react-router-dom";
import "./ProducstCard.css";
import { useAddProductToCart } from "../../../hooks/queries/useAddProductToCart";
import { useSelector } from "react-redux";
import { useGetCart } from "../../../hooks/queries/useGetCart";

const ProductCard = ({ product }) => {
  const { mutate } = useAddProductToCart();
  const { data } = useGetCart();
  const isLogged = useSelector((store) => store.auth.isLogged);
  const navigate = useNavigate();

  let isProductInCart = data?.some(
    (cartProduct) => cartProduct.productId === product.id
  );

  const handleAdd = (e) => {
    e.preventDefault();

    if (isLogged === false) {
      navigate("/login");
    } else {
      mutate({
        quantity: 1,
        productId: product.id,
      });
    }
  };

  return (
    <Link className="link" to={"/product/" + product.id}>
      <article className="productCard__container">
        <header>
          <div className="productCard__img">
            <img
              width={"100%"}
              src={product.images[0]?.url}
              alt={product.title + "image1"}
            />
          </div>

          <div className="nameProduct__container">
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
          </div>
        </header>

        <div className="priceSection__container">
          <h3>
            <em>
              $ {product.price} <code>USD</code>
            </em>
          </h3>

          {!isProductInCart && (
            <button className="productCardBuyButton" onClick={handleAdd}>
              <i className="bx bxs-cart-add"></i> Add.
            </button>
          )}
          {Boolean(isProductInCart) && (
            <p className="isProductInCart">Product added.</p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
