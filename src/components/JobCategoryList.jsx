import React from 'react';
import SingleJobCategory from './SingleJobCategory';

const JobCategoryList = ({ jobCategoryData }) => {
    return (
        <div className='mt-16'>
            <h2 className='text-4xl text-center font-medium my-4'>Job Category List</h2>
            <p className='text-center text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='lg:grid lg:grid-cols-4 lg:gap-5 lg:justify-between mt-10 lg:max-w-full max-w-[250px] mx-auto'>
                {
                    jobCategoryData.map(singleCategory => <SingleJobCategory
                        key={singleCategory.id}
                        jobCategoryData={singleCategory}
                    ></SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;