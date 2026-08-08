import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstence from '../api/AuthAxiosInstance';

export default function useAddToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async({productId, count})=>{
            return await AuthAxiosInstence.post('/Carts', {
                ProductId: productId,
                Count: count
            });
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(['catrs']);
        }
    });
   
}
