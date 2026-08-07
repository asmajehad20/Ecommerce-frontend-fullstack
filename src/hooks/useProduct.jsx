import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import AuthAxiosInstence from '../api/AuthAxiosInstance';

export default function useProduct(id) {
    const getProduct = async()=>{
            try{
                const resp = await AuthAxiosInstence.get(`/Products/${id}` );
                return resp.data.response;
            }catch(err){
                console.log(err);
            }
        }
        const query = useQuery({
                queryKey:['product', id],
                queryFn:getProduct,
                staleTime:1000 * 60 * 5
            });
  return query;
}
