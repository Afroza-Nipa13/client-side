import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin, github, resume);
        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        // save in database
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                if (res.data.insertedId) {


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application submitted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Apply For This Job : <Link to={`/jobs/${jobId}`}><span className='text-red-600'>See Details</span></Link></h1>


            <div>
                <form onSubmit={handleSubmitForm}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Page details</legend>

                        <label className="label">Linkdin Prifile link</label>
                        <input type="url" name='linkedin' className="input" placeholder="Linkdin Prifile link" required />

                        <label className="label">Github Prifile link</label>
                        <input type="url" name='github' className="input" placeholder="Github Prifile link" required/>

                        <label className="label">Resume Link</label>
                        <input type="url" name='resume' className="input" placeholder="Resume Link" required/>
                        <input type='submit' className='btn btn-primary' value='apply' />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;