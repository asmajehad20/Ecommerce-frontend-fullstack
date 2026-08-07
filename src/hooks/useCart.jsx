import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import AuthAxiosInstence from '../api/AuthAxiosInstance';

export default function useCart() {

    const getItems = async()=>{
            try{
                const resp = await AuthAxiosInstence.get(`/Carts` );
                return resp.data;
            }catch(err){
                console.log(err);
            }
        }
        const query = useQuery({
                queryKey:['Carts', 'en'],
                queryFn:getItems,
                staleTime:1000 * 60 * 5
            });
  return query;
}
