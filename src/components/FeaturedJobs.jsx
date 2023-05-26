import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleJobData from './SingleJobData';

const FeaturedJobs = () => {
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJobData(data.slice(0, 4)))

    }, [])
    return (
        <div className='mt-14'>
            <h2 className='text-center text-4xl font-bold mb-2'>Featured Jobs</h2>
            <p className='text-slate-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6'>
                {
                    jobData.map(singleJobData => <SingleJobData
                        key={singleJobData.id}
                        singleJobData={singleJobData}
                    ></SingleJobData>)
                }
            </div>
            <div className='text-center my-5'>
                <button className='bg-red-500 py-2 px-4 rounded-md text-white'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;