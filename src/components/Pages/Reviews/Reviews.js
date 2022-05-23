import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleReviews from './SingleReviews';

const Reviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () => fetch('https://toolmine-app.herokuapp.com/reviews')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='w-11/12 mx-auto my-20'>

            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Re<span className='text-primary'>views</span></span>
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <SingleReviews
                        key={review._id}
                        review={review}
                    />)
                }
            </div>

        </div>
    );
};

export default Reviews;