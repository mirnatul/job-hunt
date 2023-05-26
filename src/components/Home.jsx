import React from 'react';
import HomeBanner from './HomeBanner';
import JobCategoryList from './JobCategoryList';
import { useLoaderData } from 'react-router-dom'
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const jobCategoryData = useLoaderData();
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategoryList
                jobCategoryData={jobCategoryData}
            ></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;