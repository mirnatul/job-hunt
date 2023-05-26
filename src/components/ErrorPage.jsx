import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-red-300'>
            <FaceFrownIcon className="h-96 w-96 text-red-600" />
            <h2 className='text-red-600 text-7xl font-bold'>404</h2>
            <p className='text-red-600 text-3xl font-bold my-8'>You Lost your path!</p>
        </div>
    );
};

export default ErrorPage;