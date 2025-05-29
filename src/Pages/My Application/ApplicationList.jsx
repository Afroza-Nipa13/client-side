import React, { use, useState } from 'react';
import ApplicationListRaw from './ApplicationListRaw';

const ApplicationList = ({myApplicationsPromise}) => {
    const myApplications = use(myApplicationsPromise);
    const [applicants, setApplicants]= useState(myApplications)
    console.log(myApplications)
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-red-600'>My applied job: {myApplications.length}</h2>
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <h2>Number.</h2>
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {

        applicants.map((application,index) =><ApplicationListRaw application={application}
        index={index}
        key={application._id}
        setApplicants={setApplicants}
        applicants={applicants}
       
        ></ApplicationListRaw>)
      }
      
      
     
    </tbody>
    
   
  </table>
</div>
            </div>
        </div>
    );
};

export default ApplicationList;