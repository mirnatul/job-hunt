import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleJobData = ({ singleJobData }) => {
    const { id, company_logo, job_title, company_name, remote_or_onsite, full_or_part_time, location, salary } = singleJobData;

    return (
        <div className='border-2 rounded-md p-6 shadow-lg'>
            <img className='w-[150px] mb-5' src={company_logo} alt="" />
            <h2 className='text-xl font-bold'>{job_title}</h2>
            <p className='text-lg font-normal my-2'>{company_name}</p>
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
            <Link to={`job/${id}`} className='bg-purple-700 text-white py-2 px-4 font-semibold rounded-md'>View Details</Link>
        </div>
    );
};

export default SingleJobData;