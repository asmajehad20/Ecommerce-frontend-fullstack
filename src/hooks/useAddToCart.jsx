import { useMutation } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstence from '../api/AuthAxiosInstance';

export default function useAddToCart() {
    return useMutation({
        mutationFn: async({productId, count})=>{
            return await AuthAxiosInstence.post('/Carts', {
                ProductId: productId,
                Count: count
            });
        }
    });
   
}
