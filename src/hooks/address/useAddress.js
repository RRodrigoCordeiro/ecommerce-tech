import { useQuery } from '@tanstack/react-query';
import { fetchCep } from '../../service/axios';


export const useAddress = () => {
    return useQuery({
        queryKey: ['address'],
        queryFn: fetchCep,
    });
};
