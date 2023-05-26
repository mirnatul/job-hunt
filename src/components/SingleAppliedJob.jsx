import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ singleJob }) => {
    console.log(singleJob);
    const { id, company_logo, job_title, company_name, remote_or_onsite, full_or_part_time, location, salary } = singleJob
    return (
        <div className='flex items-center gap-4 border-2 my-8'>
            <div className='w-[120px] h-[120px] bg-slate-300 p-4 flex items-center m-4'>
                <img className='w-full' src={company_logo} alt="" />
            </div>
            <div className='my-2'>
                <h3 className='font-bold text-xl'>{job_title}</h3>
                <p className='font-medium'>{company_name}</p>
                <div className='my-3'>
                    <span className='border-2 py-1 px-3 border-purple-700 rounded-md mr-2 text-purple-700'>{remote_or_onsite}</span>
                    <span className='border-2 py-1 px-3 border-purple-700 rounded-md mr-2 text-purple-700'>{full_or_part_time}</span>
                </div>
                <div className='flex gap-3 my-2'>
                    <div>
                        <span><MapPinIcon className="h-6 w-6 inline pb-1" /></span><span>{location}</span>
                    </div>
                    <div>
                        <span><CurrencyDollarIcon className="h-6 w-6 inline pb-1" /></span><span>Salary: {salary}</span>
                    </div>
                </div>
            </div>
            <Link to={`../job/${id}`} className='ml-auto mr-2'>
                <button className='bg-purple-600 py-2 px-4 text-white rounded-md'>View Details</button>
            </Link>
        </div>
    );
};

export default SingleAppliedJob;