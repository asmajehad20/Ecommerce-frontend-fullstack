import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import AuthAxiosInstence from '../api/AuthAxiosInstance';

export default function useProducts() {
    const getProducts = async()=>{
            try{
                const resp = await AuthAxiosInstence.get(`/Products` );
                return resp.data.response.data;
            }catch(err){
                console.log(err);
            }
        }
        const query = useQuery({
                queryKey:['products'],
                queryFn:getProducts,
                staleTime:1000 * 60 * 5
            });
  return query;
}
