import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const ApplicationListRaw = ({ application, index, applicants, setApplicants }) => {
    const { _id, company, title, company_logo, salaryRange, location, jobType } = application;


    const handleRemoveApplication = async (_id) => {
        console.log("removed application successfully", _id)
   const result =  await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        
            if (result.isConfirmed) {
                // delete from database
                try {
                    const response = await axios.delete(`https://server-side-lake.vercel.app/applications/${_id}`)
                   
                    if (response.data) {

                    const remainingApplicants = applicants.filter(selected => selected._id !== _id)
                        setApplicants(remainingApplicants)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    if (error) {
                        setApplicants(applicants)
                        Swal.fire({
                            title: "Error!",
                            text: "Deleted failed.",
                            icon: "error"})
                    }


                }

            }
        ;





    }


    return (
        <tr>
            <th>
                <label>
                    <p>{index + 1}</p>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{salaryRange.min} - {salaryRange.max}{salaryRange.currency}</span>
            </td>
            <td>{jobType}</td>
            <th>
                <button onClick={() => { handleRemoveApplication(_id) }} className="btn btn-ghost btn-xs">Remove</button>
            </th>
        </tr>
    );
};

export default ApplicationListRaw;