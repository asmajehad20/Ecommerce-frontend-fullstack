import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstence from '../api/AuthAxiosInstance'

export default function useRemoveFromCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(cartItemId)=> AuthAxiosInstence.delete(`/Carts/${cartItemId}`),
        onSuccess:()=>{
            queryClient.invalidateQueries(['catrs']);
        }
        
    })
}
