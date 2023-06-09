import { useGetProducts } from "../../../hooks/queries/useGetProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ categories, title }) => {
  //useQuery is used to make GET requests
  const { data, isLoading, isError } = useGetProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Opps, something went wrong.</p>;

  console.log(data[2].id);
  console.log(title);

  console.log(categories);

  return (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
