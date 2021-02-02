import axios from "axios";
import { getToken } from "./VerifyToken";

const baseApi = (baseUrl) =>{
    const api = axios.create({
        baseUrl
    });
    api.interceptors.request.use(async config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    return api;
} 

export default baseApi;