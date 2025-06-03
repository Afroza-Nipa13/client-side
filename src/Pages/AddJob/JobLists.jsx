import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({ MyJobsPromise }) => {
    const jobs = use(MyJobsPromise)
    return (
        <div>
            <h1>My posted Jobs total: <span className='text-red-600 font-bold'>{jobs.length}</span></h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Application deadline</th>
                            <th>My applications</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job,index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.jobTitle}</td>
                                <td>{job.dead_line}</td>
                                <td>{job.application_count}</td>
                                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {

            }
        </div>
    );
};

export default JobLists;