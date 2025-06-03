import React from 'react';
import useAxiosToken from '../Hooks/useAxiosToken';

const useJobApi = () => {
    const axiosToken = useAxiosToken()
    const MyJobsPromise = email =>{
        return axiosToken.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }
    return { MyJobsPromise}
        
    ;
};

export default useJobApi;