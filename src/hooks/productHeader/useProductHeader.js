import { useQuery } from "@tanstack/react-query";
import { fetchProductHeader } from "../../service/axios";

export const useProductHeader = () => {
    return useQuery({
        queryKey:['productHeader'],
        queryFn: () => fetchProductHeader(),
    })
}