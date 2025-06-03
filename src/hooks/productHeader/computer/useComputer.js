import { useQuery } from "@tanstack/react-query";
import { fetchProductHeaderComputer } from "../../../service/axios";


export const useComputerHeaderById = (id) => {
    return useQuery({
        queryKey: ['computerHeader',id],
        queryFn: () => fetchProductHeaderComputer(id),
        enabled: !!id,
    })
}