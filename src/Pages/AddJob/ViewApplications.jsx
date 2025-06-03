import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams()
    const applications = useLoaderData();
    console.log(applications)
    const handleUpdateStatus = (e, app_id) => {
        console.log(e.target.value, app_id)
        axios.patch(`https://server-side-iscf44ope-afrozanipas-projects.vercel.app/applications/${app_id}`, {
            status: e.target.value
        })
            .then(res => {
                console.log("updated successfully", res)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>{applications.length} Applications for jobId : {job_id}</h1>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Applicant Email</th>
                                <th>github link</th>
                                <th>Resume</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications.map((application, index) => <tr >
                                    <th>{index + 1}</th>
                                    <td>{application.applicant}</td>
                                    <td>{application.github}</td>
                                    <td>{application.resume}</td>
                                    <td><select
                                        onChange={e => handleUpdateStatus(e, application._id)}
                                        defaultValue={application.status}
                                        name='status'
                                        className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                        <option>Interview</option>
                                    </select></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;