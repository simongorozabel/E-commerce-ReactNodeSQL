import { useGetProducts } from "../../../hooks/queries/useGetProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ categories, title }) => {
  //useQuery is used to make GET requests
  const { data, isLoading, isError } = useGetProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Opps, something went wrong.</p>;

  const firstFilter = data.filter((x) => x.categoryId == categories[0]);
  const secondFilter = data.filter((x) => x.categoryId == categories[1]);
  const thirdFilter = data.filter((x) => x.categoryId == categories[2]);

  const regex = new RegExp(title, "i");
  const titleFilter = data.filter((x) => regex.test(x.title));

  if (!categories.length && !title) {
    return (
      <ul className="productList__container">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    );
  } else if (title.length >= 1 && !categories.length) {
    return (
      <ul className="productList__container">
        {titleFilter?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    );
  } else if (categories.length >= 1 && !title.length) {
    return (
      <ul className="productList__container">
        {firstFilter?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
        {secondFilter?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
        {thirdFilter?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    );
  } else if (categories.length >= 1 && title.length >= 1) {
    return (
      <ul className="productList__container">
        {firstFilter
          ?.filter((x) => regex.test(x.title))
          .map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        {secondFilter
          ?.filter((x) => regex.test(x.title))
          .map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        {thirdFilter
          ?.filter((x) => regex.test(x.title))
          .map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    );
  }
};

export default ProductList;
