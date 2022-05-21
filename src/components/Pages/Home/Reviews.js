import React from 'react';
import SingleReviews from './SingleReviews';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'moyeen',
            text: 'klskdjkf dfkkdjkfd dkljfjd',
            rate: 5
        },
        {
            id: 2,
            name: 'moyeen',
            text: 'klskdjkf dfkkdjkfd dkljfjd',
            rate: 5
        },
        {
            id: 3,
            name: 'moyeen',
            text: 'klskdjkf dfkkdjkfd dkljfjd',
            rate: 5
        },
    ]
    return (
        <div className='w-11/12 mx-auto my-20'>
            
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Re<span className='text-primary'>views</span></span>
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <SingleReviews
                        key={review.id} 
                        review={review}/>)
                }
            </div>

        </div>
    );
};

export default Reviews;