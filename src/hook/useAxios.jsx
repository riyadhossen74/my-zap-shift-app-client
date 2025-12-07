import axios from 'axios';
import React from 'react';

const axiosBase = axios.create({
  baseURL: "https://zap-shift-server-three-nu.vercel.app",
});

const useAxios = () => {
    return  axiosBase
};

export default useAxios;