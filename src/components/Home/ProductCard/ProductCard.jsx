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
    <Link to={"/product/" + product.id}>
      <article className="productCard__container">
        <header>
          <div className="productCard__img">
            <img src={product.images[0].url} alt={product.title + "image1"} />
            <img src={product.images[1].url} alt={product.title + "image1"} />
          </div>

          <p>{product.brand}</p>
          <h2>{product.title}</h2>
        </header>

        <div className="section">
          <h3>price</h3>
          <p>
            <em>$ {product.price} USD</em>
          </p>
        </div>

        {!isProductInCart && (
          <button className="productCard__button" onClick={handleAdd}>
            <i className="bx bxs-cart-add"></i>
          </button>
        )}
        {Boolean(isProductInCart) && (
          <p style={{ padding: "20px", color: "#333" }}>
            You have this product on Cart
          </p>
        )}
      </article>
    </Link>
  );
};

export default ProductCard;
