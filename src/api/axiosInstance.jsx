import axios from "axios";

const axiosInstence = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    headers:{
        "Accept-Language":"en"
    }
});

export default axiosInstence;