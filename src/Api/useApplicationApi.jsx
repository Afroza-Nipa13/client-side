import React from 'react';
import useAxiosToken from '../Hooks/useAxiosToken';

const useApplicationApi = () => {
    const axiosToken = useAxiosToken()
    const myApplicationsPromise = email => {
        return axiosToken.get(`/applications?email=${email}`)
        .then(res=> res.data)
    }
    return { myApplicationsPromise};
};

export default useApplicationApi;
