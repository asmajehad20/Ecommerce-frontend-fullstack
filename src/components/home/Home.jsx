import React from 'react'
import Categories from '../categories/Categories'
import Products from '../products/Products'
import { useCounterStore } from '../../store/useCounterStore'

export default function Home() {
  const counter = useCounterStore((state)=> state.counter);
  return (
    <>
    {counter}
    <Categories/>
    <Products/>
    </>
  )
}
