import { useQuery } from '@tanstack/react-query';
import { fetchAttendants } from '../service/axios';

export const useAttendant = () => {
    return useQuery({
        queryKey: ['attendants'],
        queryFn: fetchAttendants,
    });
};