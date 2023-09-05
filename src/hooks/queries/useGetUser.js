import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getUser } from "../../services/auth/getUser";

export const useGetUser = () => {
  const { token, isLogged } = useSelector((store) => store.auth);
  const query = useQuery({
    queryKey: ["user", isLogged],
    queryFn: () => getUser(token),
    enabled: isLogged,
  });
  console.log(query.data);

  return query;
};
