import axios from 'axios'
import React, { use, useEffect } from 'react'
import AuthAxiosInstence from '../../api/AuthAxiosInstance';
import useAuthStore from '../../store/useAuthStore';

export default function Cart() {

  const token = useAuthStore((state)=>state.token);
  console.log(token);
  const getItems = async ()=>{
    const response = await AuthAxiosInstence.get(`/Carts`);
    console.log(response);
  }

  useEffect(()=>{
    getItems();
  }, [])

  return (
    <>
    
    <div>Cart</div>
    </>
    
  )
}
