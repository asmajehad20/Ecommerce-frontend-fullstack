import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Products() {
  const {data, isLoading, isError, error} = useProducts();
  
  if(isLoading)return <CircularProgress />

  return (
    <>
    <Box className="products" component="section">
      <Typography component="h1" variant='h3'>Products</Typography>

      <Grid container spacing={{xs:2, md:3}} sx={{textAlign:'center'}}>
        {data?.map((product)=>{
        return(
        <Grid item size={{xs: 12, sm:6, md: 4}}>
          <Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>
          <Card>
          <CardMedia component="img" image={product.image} alt={product.name} sx={{width:200}}></CardMedia>
          <CardContent>
            <Typography component="h3" variant='h3'>{product.name}</Typography>
            <Typography component="span" variant='body1'>{product.price}$</Typography>
          </CardContent>
          </Card>
          </Link>
        </Grid>
        );
        })}
      </Grid>
      
    </Box>
    </>
  )
}
