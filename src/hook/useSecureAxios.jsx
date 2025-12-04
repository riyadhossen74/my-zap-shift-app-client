import axios from "axios";

import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://zap-shift-sarver.vercel.app",
});

const useSecureAxios = () => {
    const {user, LogOut} = useAuth()
    const navigate = useNavigate()
  useEffect(() => {
    // interceptors request
   const reqInterceptors = axiosSecure.interceptors.request.use(configs=>{
        configs.headers.Authorization = `Bearer ${user?.accessToken}`
        return configs
    })

    // interceptors response
    const resInterceptors = axiosSecure.interceptors.response.use((response)=>{
        return response
    },(error)=>{
        console.log(error)
        const statusCode = error.status
            if(statusCode === 401 || statusCode === 403){
                LogOut()
                .then(()=>{
                    navigate('/login')
                })
                
            }

        return Promise.reject(error)
    })

    return () =>{
        axiosSecure.interceptors.request.eject(reqInterceptors)
        axiosSecure.interceptors.response.eject(resInterceptors)
    }
  }, [user, LogOut, navigate]);

  return axiosSecure;
};

export default useSecureAxios;
