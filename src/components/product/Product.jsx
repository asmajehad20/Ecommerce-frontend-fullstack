import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Product() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useProduct(id);
    if(isLoading) return <CircularProgress></CircularProgress>

    console.log(data);
  return (
    <Box>
        <Typography>{data.name}</Typography>
        <Typography>{data.description}</Typography>
    </Box>
  )
}

