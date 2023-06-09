import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { addProductToCart } from "../../services/cart/addProductToCart";

export const useAddProductToCart = () => {
  const token = useSelector((store) => store.auth.token);

  //Gestiona todo el cache de React Query
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ quantity, productId }) => {
      addProductToCart({ token, quantity, productId });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return mutation;
};
