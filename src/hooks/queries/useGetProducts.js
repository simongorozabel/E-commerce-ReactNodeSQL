import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/products/getAllProducts";

export const useGetProducts = (categories, title) => {
  const query = useQuery({
    queryKey: ["products", { categories, title }],
    queryFn: () => getAllProducts(categories, title),
  });

  return query;
};
