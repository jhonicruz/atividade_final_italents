import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:3000';
export const useMutateProduct = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const addProduct = async (product) => {
    return await axios.post(`/produtos`, product);
  };

  const deleteProduct = async (id) => {
    return await axios.delete(`/produtos/${id}`);
  };

  const editProduct = async (product) => {
    return await axios.put(`/produtos/${product.id}`, product);
  };

  const addProductMutation = useMutation({
    mutationKey: ['addProduct'],
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['addProduct']);
    },
  });

  const deleteProductMutation = useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: deleteProduct,
  });

  const editProductMutation = useMutation({
    mutationKey: ['editProduct'],
    mutationFn: editProduct,

    onSuccess: () => {
      setTimeout(() => {
        navigate('/gerenciar-produtos');
      }, 2000);

      queryClient.invalidateQueries(['editProduct']);
    },
  });

  return { addProductMutation, deleteProductMutation, editProductMutation };
};
