import axios from "axios";

const token = localStorage.getItem('accessToken');

const AuthAxiosInstence = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    headers:{
        "Authorization": `Bearer ${token}`,
        "Accept-Language":"en"
    }
});

export default AuthAxiosInstence;