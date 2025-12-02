import axios from 'axios';
import React from 'react';

const axiosBase = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
    return  axiosBase
};

export default useAxios;