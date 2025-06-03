import React, { Suspense } from 'react';
import JobLists from './JobLists';

import Loading from '../Loader/Loading';
import useAuth from '../../Hooks/useAuth';
import useJobApi from '../../Api/useJobApi';


const MyPostedJobs = () => {
    const {user}= useAuth()
    const {MyJobsPromise}= useJobApi()
  
    return (
        <div>
            <h2 className='text-4xl font-bold'>My Posted Jobs :<span className='text-blue-600'> 0 </span> </h2>
            <div>
                <Suspense fallback={<Loading></Loading>}>
                    <JobLists MyJobsPromise={MyJobsPromise(user.email)}></JobLists>
                </Suspense>
            </div>
        </div>
    );
};

export default MyPostedJobs;