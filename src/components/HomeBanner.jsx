import React from 'react';

const HomeBanner = () => {
    return (
        <div className='lg:flex lg:justify-between p-4'>
            <div className='mt-6'>
                <h1 className='text-6xl font-semibold leading-[4.5rem] text-center lg:text-left'>One Step <br />To Your <br /><span className='text-violet-600'>Dream Job</span></h1>
                <p className='lg:max-w-[500px] text-center lg:text-left mt-4 text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-purple-600 p-4 rounded-lg text-white font-bold lg:inline-block block mx-auto mt-4'>Get Started</button>
            </div>
            <div className='mt-6 max-w-[550px]'>
                <img className='w-full' src="https://www.freepnglogos.com/uploads/businessman-png/businessman-steven-trigg-plus-financial-services-15.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;