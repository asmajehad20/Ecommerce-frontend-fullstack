import React, { useState } from "react";
import style from "./Login.module.css";
import {Box, Button, CircularProgress, Container, Paper, TextField, Typography, } from "@mui/material";
import {useForm} from 'react-hook-form'
import axios from "axios";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Password } from "@mui/icons-material";
import {loginSchema} from "./../../validations/LoginSchema"

function Login() {
  const [serverErrors, setServerErrors] = useState([]);

  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({
    resolver:yupResolver(loginSchema)
  });
  const loginForm = async (data)=>{
    console.log(data);
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, data);
      console.log(response.data.accessToken);
      localStorage.setItem("accessToken", response.data.accessToken );
    }catch(ex){
      console.log(ex);
      setServerErrors(errors.response.data.errors);
    }
  }

  return (
    <Container maxWidth="sm">
        <Typography variant="h4" align="center" fontWeight="bold" >
          Login
        </Typography>

        {serverErrors?.length > 0 ? serverErrors.map((error)=>{
          return <Typography color="error">{error}</Typography>
        }) : ''}
        <Box component="form" onSubmit={handleSubmit(loginForm)} sx={{marginTop:2, display: "flex", flexDirection: "column", gap: 2, }} >

          <TextField {...register("email")} variant="outlined" label="Email" name="email" type="email" fullWidth 
          error={errors.email}
          helperText={errors.email?.message}/>

          <TextField {...register("password")} variant="outlined" label="Password" name="password" type="password" fullWidth 
          error={errors.password}
          helperText={errors.password?.message}/>

          <Button type="submit" sx={{ mt: 1 }} disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress/> : 'Login'}
          </Button>
        </Box>
    </Container>
  );
}

export default Login;