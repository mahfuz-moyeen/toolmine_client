import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    return (
        <div>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Purchase <span className='text-primary'>Item</span></span>
            </h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Purchase;