import axios from 'axios'
import React, { use, useEffect } from 'react'
import AuthAxiosInstence from '../../api/AuthAxiosInstance';
import { useCounterStore } from '../../store/useCounterStore';

export default function Cart() {

  const x = useCounterStore((state)=>state.counter);
  const getItems = async ()=>{
    const response = await AuthAxiosInstence.get(`/Carts`);
    console.log(response);
  }

  useEffect(()=>{
    getItems();
  }, [])

  return (
    <>
    <button onClick={useCounterStore((state)=>state.increment)}>counter</button>
    <div>Cart - {x}</div>
    </>
    
  )
}
