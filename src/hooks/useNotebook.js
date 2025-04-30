import { useQuery } from '@tanstack/react-query';
import { fetchNotebook } from '../service/axios';

export const useNotebook = () => {
   return useQuery({
          queryKey: ['notebook'],
          queryFn: fetchNotebook,
      });
}
