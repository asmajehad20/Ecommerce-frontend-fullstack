import React from 'react'
import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
// import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    const {mutate:removeItem, isPending} = useRemoveFromCart();
    const {mutate:updateItem, isPending:updateItemPending} = useUpdateCartItem();

    const handleUpdate = (productId, action)=>{
        const item = data.items.find(i=>i.productId == productId);

        if(action == '+'){
            updateItem({productId, count:item.count+1});
        }
        if(action == '-'){
            updateItem({productId, count:item.count-1});
        }
    }

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>{error.message}</Typography>

    console.log(data);
  return (
    <Box component="section">
        <Typography variant='h1'>Cart</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    
                </TableHead>

                <TableBody>
                    {data.items.map((item)=>(
                        <TableRow key={item.id}>
                           <TableCell>{item.productName}</TableCell>
                           <TableCell>{item.price}$</TableCell>
                           <TableCell>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <IconButton size='small'>
                                    <RemoveIcon onClick={()=>handleUpdate(item.productId, '-')}/>
                                </IconButton>
                                <Typography>{item.count}</Typography>
                                <IconButton size='small'>
                                    <AddIcon onClick={()=>handleUpdate(item.productId, '+')} />
                                </IconButton>
                            </Box>
                            
                           </TableCell>
                           <TableCell>{item.totalPrice}$</TableCell>
                           <TableCell><Button color='error' disabled={isPending} onClick={()=>{removeItem(item.productId)}}>Remove</Button></TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}
