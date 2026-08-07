import React from 'react'
import useCart from '../../hooks/useCart'
import { Box, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>{error.message}</Typography>

    console.log(data);
  return (
    <Box component="section">
        <Typography variant='h1'>Cart</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Actions</TableCell>
                </TableHead>

                <TableBody>
                    {data.items.map((item)=>(
                        <TableRow key={item.id}>
                           <TableCell>{item.productName}</TableCell>
                           <TableCell>{item.price}$</TableCell>
                           <TableCell>{item.count}</TableCell>
                           <TableCell>{item.totalPrice}$</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}
