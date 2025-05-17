import { useQuery } from '@tanstack/react-query';
import { fetchAttendants } from '../../service/axios';

export const useAttendant = () => {
    return useQuery({
        queryKey: ['attendants'],
        queryFn: fetchAttendants,
    });
};


// import { useQuery } from '@tanstack/react-query';
// import { fetchAttendants } from '../service/axios';
// import attendant from '../pages/Attendant';

// export const useAttendant = () => {
//     const {data} =  useQuery({
//         queryKey: ['attendants'],
//         queryFn: fetchAttendants,
//     });

//     return{
//         attendants: data,
//     };
// };