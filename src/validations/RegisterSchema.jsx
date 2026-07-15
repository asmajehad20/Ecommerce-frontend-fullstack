import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

export const registerSchema = yup.object({
    userName:yup.string().required().min(3).max(25),
    fullName:yup.string().required().min(3).max(25),
    email:yup.string().email().required(),
    phoneNumber:yup.string().required(),
    password:yup.string().required(),
  });