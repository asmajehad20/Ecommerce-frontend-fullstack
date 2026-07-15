import React, { useState } from "react";
import style from "./Register.module.css";
import {Box, Button, Container, Paper, TextField, Typography, } from "@mui/material";
import {useForm} from 'react-hook-form'
import axios from "axios";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Password } from "@mui/icons-material";
import {registerSchema} from "./../../validations/RegisterSchema"

function Register() {
  const [serverErrors, setServerErrors] = useState([]);

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(registerSchema)
  });
  const registerForm = async (data)=>{
    console.log(data);
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      console.log(response);
    }catch(ex){
      console.log(ex.response.data.errors);
      serverErrors(errors.response.data.errors);
    }
  }

  return (
    <Box maxWidth="sm">
        <Typography variant="h4" align="center" fontWeight="bold" >
          Register
        </Typography>

        {serverErrors?.length > 0 ? serverErrors.map((error)=>{
          return <Typography color="error">{error}</Typography>
        }) : ''}
        <Box component="form" onSubmit={handleSubmit(registerForm)} sx={{marginTop:2, display: "flex", flexDirection: "column", gap: 2, }} >

          <TextField {...register("fullName")} variant="outlined" label="Full Name" name="fullName" fullWidth 
          error={errors.fullName}
          helperText={errors.fullName?.message}/>

          <TextField {...register("userName")} variant="outlined" label="Username" name="userName" fullWidth 
          error={errors.userName}
          helperText={errors.userName?.message}/>

          <TextField {...register("email")} variant="outlined" label="Email" name="email" type="email" fullWidth 
          error={errors.email}
          helperText={errors.email?.message}/>

          <TextField {...register("phoneNumber")} variant="outlined" label="Phone Number" name="phoneNumber" type="tel" fullWidth 
          error={errors.phoneNumber}
          helperText={errors.phoneNumber?.message}/>

          <TextField {...register("password")} variant="outlined" label="Password" name="password" type="password" fullWidth 
          error={errors.password}
          helperText={errors.password?.message}/>

          <Button type="submit" sx={{ mt: 1 }} >
            Register
          </Button>
        </Box>
    </Box>
  );
}

export default Register;