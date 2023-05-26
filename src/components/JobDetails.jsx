import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from './fakedb';

const JobDetails = () => {
    const [cart, setCart] = useState([]);
    const handleAppliedJob = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist - update the quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            // alert("You already applied it!")
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    const data = useLoaderData();
    const { id } = useParams();
    const expectedData = data.find(singleData => singleData.id == id);

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, location } = expectedData;
    return (
        <div>
            <h2 className='text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center'>Job Details</h2>
            <div className='grid lg:grid-cols-3 lg:gap-10 py-4'>
                <div className='lg:col-span-2'>
                    <p className='my-4'><span className='font-bold'>Job Description: </span>{job_description}</p>
                    <p className='my-4'><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</p>
                    <p className='my-4'><span className='font-bold'>Educational Requirement: </span><br />{educational_requirements}</p>
                    <p className='my-4'><span className='font-bold'>Experience: </span><br />{experiences}</p>
                </div>
                <div className='lg:col-span-1 bg-slate-200 p-6'>
                    <h2 className='text-lg font-bold my-3'>Job Details</h2>
                    <hr className='border-2 border-slate-300 my-3' />
                    <p className='my-2'><CurrencyDollarIcon className="h-6 w-6 text-violet-500 inline pb-1" /> <span className='font-bold'>Salary :</span> {salary} (Per Month)</p>
                    <p className='my-2'><CalendarIcon className="h-6 w-6 text-violet-500 inline pb-1" /> <span className='font-bold'>Job Title :</span> {job_title}</p>
                    <h2 className='text-lg font-bold my-3'>Contact Information</h2>
                    <hr className='border-2 border-slate-300 my-3' />
                    <p className='my-2'><PhoneIcon className="h-6 w-6 text-violet-500 inline pb-1" /> <span className='font-bold'>Phone :</span> {contact_information[0]}</p>
                    <p className='my-2'><EnvelopeIcon className="h-6 w-6 text-violet-500 inline pb-1" /> <span className='font-bold'>Email :</span> {contact_information[1]}</p>
                    <p className='my-2'><MapPinIcon className="h-6 w-6 text-violet-500 inline pb-1" /> <span className='font-bold'>Address :</span> {location}</p>
                    <button onClick={() => handleAppliedJob(expectedData)} className='bg-purple-500 w-full py-2 text-white font-medium text-lg mt-2 rounded-md'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;