import React, { useState, useEffect } from 'react';
import { getShoppingCart } from './fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJobs = () => {
    const wholeData = useLoaderData();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step - 1: get id
        for (const id in storedCart) {
            // step - 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step - 3: get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step - 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // set the cart
        setCart(storedCart);

    }, [products])
    let appliedJobList = [];
    for (const id in cart) {
        const addJob = wholeData.find(job => job.id == id);
        appliedJobList = [...appliedJobList, addJob];
    }

    // appliedJobList 

    return (
        <div>
            <h2 className='text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center'>Applied Jobs</h2>
            <div>
                {
                    appliedJobList.map(singleJob => <SingleAppliedJob
                        key={singleJob.id}
                        singleJob={singleJob}
                    ></SingleAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;