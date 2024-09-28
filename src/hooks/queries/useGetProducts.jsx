import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  const fetchProducts = async () => {
    const response = await axios.get(`http://localhost:3000/produtos`);
    return response;
  };

  const query = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 1000,
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
