import React from 'react';

const SingleJobCategory = ({ jobCategoryData }) => {
    const { logo, name, jobs } = jobCategoryData;
    return (
        <div className='bg-slate-200 p-8 m-4 rounded-md'>
            <img src={logo} alt="" />
            <p className='text-lg font-medium mt-4'>{name}</p>
            <p className='text-slate-500 text-sm'>{jobs}</p>
        </div>
    );
};

export default SingleJobCategory;