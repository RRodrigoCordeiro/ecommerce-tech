import { useQuery } from '@tanstack/react-query';
import { fetchCep } from '../../service/axios';


export const useAddress = (cep) => {
    return useQuery({
        queryKey: ['address',cep],
         
        queryFn: () => fetchCep(cep),
        enabled: !!cep && cep.length === 8,
    });
};
