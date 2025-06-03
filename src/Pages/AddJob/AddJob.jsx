import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth()
    console.log(user)
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        // salaryRange object banai
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // Requirements making clean array

        const requirementsString = newJob.requirements
        const requirementsWithSpace = requirementsString.split(',')
        const reqirementsClean = requirementsWithSpace.map(req => req.trim())
        newJob.requirements = reqirementsClean
        console.log(newJob)

        // Responsibility making clean array
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        console.log(newJob)

        // checking shob property er data pacchi ki na
        console.log(Object.keys(newJob).length)

        // jehetu ata newJOb so status "active" kore dibo
        newJob.status = "active";

        // save to database
        axios.post('https://server-side-iscf44ope-afrozanipas-projects.vercel.app/jobs', newJob).then(res => {
            console.log(res)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job has been saved updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='w-full mx-auto text-center my-8'>
            <h1 className='text-5xl font-bold mb-5'>Add Job</h1>
            <div >
                <form onSubmit={handleAddJob} className='w-5xl mx-auto'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Page details</legend>

                        <label className="label">Job title</label>
                        <input type="text" name='jobTitle' className="input w-full" placeholder="Job title" />

                        <label className="label">Company name</label>
                        <input type="text" name='companyName' className="input w-full" placeholder="Company name" />

                        <label className="label">Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Location" />
                        <label className="label">Company Logo</label>
                        <input type="text" name='companyLogo' className="input w-full" placeholder="Company logo" />
                    </fieldset>

                    {/* job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job type</legend>
                        <div className="filter w-full">
                            <input className="btn filter-reset w-full" type="reset" name="jobType" value="×" aria-label='All' />
                            <input className="btn" type="radio" name="jobType" value='On-site' aria-label="On-site" />
                            <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Remote" />
                            <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid" />
                        </div>
                        {/* Job category */}
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend w-full">Job category</legend>
                        <select defaultValue="Job category" className="select w-full">
                            <option disabled={true}>Job Category</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Finance</option>
                        </select>

                        {/* application deadline */}
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Application deadline</legend>
                        <input type="datetime-local" name='dead_line' className="input w-full" />


                    </fieldset>
                    {/* Salary Range */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
                            <div className='w-full'>
                                <label className="label w-full">Minimum Salary</label>
                                <input type="text" className="input w-full" name='min' placeholder="Minimum Salary" />
                            </div>

                            <div className='w-full'>
                                <label className="label w-full">Maximum Salary</label>
                                <input type="text" className="input w-full" name='max' placeholder="Maximum Salary" />
                            </div>

                            <div className='w-full'>
                                <label className="label w-full">Select a Currency</label>
                                <select defaultValue="Select a Currency" name='currency' className="select w-full">
                                    <option disabled={true}>Select a Currency</option>
                                    <option>Bdt</option>
                                    <option>USD</option>
                                    <option>Dirham</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>


                    {/*Description  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea w-full" name='description' placeholder="Job description"></textarea>
                    </fieldset>

                    {/* Requirements */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Requirements</legend>
                        <textarea className="textarea w-full" name='requirements' placeholder="job requirements (separate by comma)"></textarea>

                    </fieldset>
                    {/* Responsibilities */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Responsibilities</legend>
                        <textarea className="textarea w-full" name='responsibilities' placeholder="Responsibilities(separate by comma)"></textarea>

                    </fieldset>
                    {/* HR Information */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">HR's details</legend>

                        <label className="label w-full">HR's Name</label>
                        <input type="text" name='hrName' className="input w-full" placeholder="HR Name" />

                        <label className="label w-full">HR Email</label>
                        <input type="text" name='hr_email' className="input w-full" placeholder="HR Email" defaultValue={user.email} />



                    </fieldset>
                    <input type='submit' className='btn text-xl font-bold w-full' value='Add Job' />
                </form>
            </div>
        </div >
    );
};

export default AddJob;