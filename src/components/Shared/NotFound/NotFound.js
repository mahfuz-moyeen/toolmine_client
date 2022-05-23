import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound404 from '../../../image/404notfount.png'
const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-neutral">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={notFound404} alt="page notFound" />
                    <h1 className='text-base-100 py-5 text-lg'>The page you are looking for might have been removed had its name changed or is temporarily unavailable</h1>
                    <Link to='/' className="btn btn-primary my-10"><ArrowLeftIcon className='w-6 h-6' />Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;