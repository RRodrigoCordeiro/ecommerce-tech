import { useQuery } from '@tanstack/react-query';
import { fetchComputer } from '../service/axios';

export const useComputer = () => {
   return useQuery({
          queryKey: ['computer'],
          queryFn: fetchComputer,
      });
}
