import { useQuery } from '@tanstack/react-query';
import { fetchCep } from '../service/axios';


export const useAttendant = () => {
    return useQuery({
        queryKey: ['address'],
        queryFn: fetchCep,
    });
};
