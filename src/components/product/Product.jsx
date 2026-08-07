import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

export default function Product() {
    const {id} = useParams();
    const {mutate:addToCart} = useAddToCart();
    const {data, isLoading, isError, error} = useProduct(id);
    if(isLoading) return <CircularProgress></CircularProgress>

    console.log(data);
  return (
    <Box>
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>
        <Button onClick={()=>{addToCart({productId:data.response.id, count:1})}}>Add to Cart</Button>
    </Box>
  )
}

