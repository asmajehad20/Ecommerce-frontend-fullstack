import React, { useState } from "react";
import style from "./Register.module.css";
import {Box, Button, Container, Paper, TextField, Typography, } from "@mui/material";
import {useForm} from 'react-hook-form'
import axios from "axios";

function Register() {
  const {register, handleSubmit} = useForm();
  const registerForm = async (data)=>{
    console.log(data);
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Container maxWidth="sm">
        <Typography variant="h4" align="center" fontWeight="bold" >
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit(registerForm)} sx={{marginTop:2, display: "flex", flexDirection: "column", gap: 2, }} >

          <TextField {...register("fullName")} variant="outlined" label="Full Name" name="fullName" fullWidth required />

          <TextField {...register("userName")} variant="outlined" label="Username" name="userName" fullWidth required />

          <TextField {...register("email")} variant="outlined" label="Email" name="email" type="email" fullWidth required />

          <TextField {...register("phoneNumber")} variant="outlined" label="Phone Number" name="phoneNumber" type="tel" fullWidth required />

          <TextField {...register("password")} variant="outlined" label="Password" name="password" type="password" fullWidth required />

          <Button type="submit" sx={{ mt: 1 }} >
            Register
          </Button>
        </Box>
    </Container>
  );
}

export default Register;