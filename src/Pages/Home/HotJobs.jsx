import React, { use } from 'react';
import JobCard from '../shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    
    return (
        <div>
            <h2>HOT Jobs For You {jobs.length}</h2>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                {
                jobs.map(job=><JobCard key={job._id}
                job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default HotJobs;