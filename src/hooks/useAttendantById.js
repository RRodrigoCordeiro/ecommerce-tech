import { useQuery } from '@tanstack/react-query';
import { fetchAttendantById } from '../service/axios';

export const useAttendantById = (id) => {
  return useQuery({
    queryKey: ['attendants', id],
    queryFn: () => fetchAttendantById(id),
    enabled: !!id, 
  });
};
