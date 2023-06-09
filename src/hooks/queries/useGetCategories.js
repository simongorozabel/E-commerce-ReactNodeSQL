import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/products/getAllcategories";

export const useGetCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  return query;
};
