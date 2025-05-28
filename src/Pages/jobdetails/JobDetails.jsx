
import React from 'react';
import { BsFillCupFill } from 'react-icons/bs';

import { GiWatch } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { SlBadge } from 'react-icons/sl';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, status, location, salaryRange,jobType, company,applicationDeadline} = useLoaderData()
   
    return (
        <div className=''>
            <div className='border border-gray-300 px-8 py-4 rounded-2xl my-5'>
            <h2 className='text-3xl font-bold text-gray-900 text-start mb-5 border-b-1 pb-4 border-gray-300'>Employment Information</h2>
            <div className='flex md:flex-row flex-col justify-between space-y-5'>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><MdHomeWork/>Industry :         <span className='text-xl ml-4 text-gray-900'>   {company}   </span></h2>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><GrUserWorker />Status :         <span className='text-xl ml-4 text-gray-900'>   {status}   </span></h2>
            </div>
            <div className='flex md:flex-row flex-col justify-between space-y-5'>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><RiMoneyDollarCircleLine />Salary-Range :         <span className='text-xl ml-4 text-gray-900'>   {salaryRange.min}-{salaryRange.max}  {salaryRange.currency} </span></h2>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><SlBadge/>Experience :         <span className='text-xl ml-4 text-gray-900'>   Fresher  </span></h2>
            </div>
            <div className='flex md:flex-row flex-col justify-between space-y-5'>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><BsFillCupFill />Job Type :         <span className='text-xl ml-4 text-gray-900'>   {jobType}   </span></h2>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><GiWatch />Deadline :         <span className='text-xl ml-4 text-gray-900'>   {applicationDeadline}   </span></h2>
            </div>
            <div className='flex md:flex-row flex-col justify-between space-y-5'>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><RxUpdate />Updated :         <span className='text-xl ml-4 text-gray-900'>   {company}   </span></h2>
                <h2 className='text-gray-500 text-xl flex items-center gap-2 mb-5'><IoLocationOutline />Location :         <span className='text-xl ml-4 text-gray-900'>   {location}   </span></h2>
            </div>
           
           

        </div>
       <Link to={`/jobapply/${_id}`}>
        <button className='btn btn-primary mb-5'>Apply Now</button>
       </Link>
        </div>
    );
};

export default JobDetails;