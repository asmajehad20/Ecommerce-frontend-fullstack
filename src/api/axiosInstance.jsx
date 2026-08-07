import axios from "axios";

const axiosInstence = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    headers:{
        "Accept-Language":"en",
        "Access-Control-Allow-Origin":"*"
    }
});

export default axiosInstence;