import React, { use } from 'react';

const ApplicationList = ({myApplicationsPromise}) => {
    const myApplications = use(myApplicationsPromise);
    console.log(myApplications)
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-red-600'>My applied job: {myApplications.length}</h2>
        </div>
    );
};

export default ApplicationList;