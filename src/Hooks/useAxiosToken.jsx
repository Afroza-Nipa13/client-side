import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL:'https://server-side-lake.vercel.app'
})

const useAxiosToken = () => {
   const {user, signOutUser}= useAuth();
   axiosInstance.interceptors.request.use(config =>{
    config.headers.Authorization =`Bearer ${user.accessToken}`
    return config;
   }) 
//    resopons interceptors

axiosInstance.interceptors.response.use(response=>{
    return response;
},error=>{
    console.log("error in interceptors", error)
    if(error?.response?.status === 401 || error?.response?.status === 403){
        signOutUser().then(()=>{
            console.log('user signed out for 401 status')
        }).catch(error=>console.log(error))
    }
    return Promise.reject(error)
})
    return axiosInstance;
};

export default useAxiosToken;