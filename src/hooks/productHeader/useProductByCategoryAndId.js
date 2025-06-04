import { useQuery } from "@tanstack/react-query";
import { fetchProductByCategoryAndId } from "../../service/axios";  

export const useProductByCategoryAndId = (category, id) => {
  return useQuery({
    queryKey: ['product', category, id],
    queryFn: () => fetchProductByCategoryAndId(category, id),
    enabled: !!category && !!id,
  });
};
