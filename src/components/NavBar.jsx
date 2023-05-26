import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-4'>
            <h1 className='text-3xl font-bold'>JobHunt</h1>
            <nav className='flex gap-x-4 font-semibold text-blue-500 py-4'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistic</Link>
                <Link to='/applied-jobs'>Applied-Job</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
            <div>
                <button className='bg-purple-600 p-4 rounded-lg text-white font-bold'>Start Applying</button>
            </div>
        </div>
    );
};

export default NavBar;