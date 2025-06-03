import React, {  useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import useAuth from '../../Hooks/useAuth';
import Loading from '../Loader/Loading';

const Home = () => {
    const {loading, setLoading}= useAuth()
const [jobs, setJobs]=useState([]);

useEffect(()=>{
    setLoading(true)
    const jobsPromise = fetch('https://server-side-iscf44ope-afrozanipas-projects.vercel.app/jobs')
    .then(res=>res.json()).then(data=>{
        console.log("data found", data)
        setJobs(data)
        setLoading(false)
    })
    .catch(error =>{
        console.log("data loading failed", error)
        setLoading(false)
    })
    console.log(jobsPromise)
},[setLoading])
  
    
    return (
        <div>
            <Banner></Banner>
            {
                loading? <Loading></Loading>
                :
                <HotJobs jobs={jobs}></HotJobs>
            }
                
         
        </div>
    );
};

export default Home;