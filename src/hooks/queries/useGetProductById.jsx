import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

axios.defaults.baseURL = 'http://localhost:3000';

export const useGetProductById = (id) => {
  const fetchProductById = async () => {
    const product = await axios.get(`/produtos/${id}`);
    return product;
  };
  const query = useQuery({
    queryKey: ['product-id', id],
    queryFn: fetchProductById,
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
