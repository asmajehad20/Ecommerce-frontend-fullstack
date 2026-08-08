import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstence from '../api/AuthAxiosInstance'

export default function useUpdateCartItem() {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async({productId, count})=>{
        await AuthAxiosInstence.patch(`/Carts/${productId}`, {count})
        
    },
    onSuccess:()=>{
            queryClient.invalidateQueries(['catrs']);
        }
    
  })
}
