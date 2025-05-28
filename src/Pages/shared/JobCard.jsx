import React from 'react';
import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  const {_id, title, status, company_logo, location, salaryRange,  description, company, requirements, jobType,  } = job


  return (
    <div className="card bg-base-100 shadow-sm py-4 px-3">
      <div className='flex justify-around mb-3'>
        <div>
          <img
            src={company_logo}
            alt={company} />
        </div>
        <div>
            <h2 className='text-gray-600 text-2xl font-bold mb-1'>{company}</h2>
            <p className='flex items-center gap-1 text-gray-400 pt-2'><FaLocationDot/> {location}</p>
        </div>
      </div>



      <div className="card-body">
        <div className='mb-2'>
          <h2 className='text-gray-600 text-2xl font-bold'>{title}</h2>
            <div className='flex justify-around'>
              <p className='flex items-center gap-1 text-gray-400 pt-2'><PiShoppingBagOpenBold /> {jobType}</p>
            <p className='flex items-center gap-1 text-gray-400 pt-2'><IoMdTime /> {status}</p>
            </div>
        </div>
        <p>{description}</p>

        <div className='card-actions'>
            {requirements.map((req,index)=><div key={index} className='badge badge-outline'>{req}</div> )}

            <p>Salary: {salaryRange.min} -{salaryRange.max} {salaryRange.currency}</p>
          </div>
        <div className="card-actions justify-end">
          
         <Link to={`/jobs/${_id}`}> <button className='btn btn-primary'>View Details</button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default JobCard;