import axios from 'axios'
import React, { use, useEffect } from 'react'
import AuthAxiosInstence from '../../api/AuthAxiosInstance';

export default function Cart() {

  const getItems = async ()=>{
    const response = await AuthAxiosInstence.get(`/Carts`);
    console.log(response);
  }

  useEffect(()=>{
    getItems();
  }, [])

  return (
    <div>Cart</div>
  )
}
