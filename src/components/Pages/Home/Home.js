import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import ContactUs from '../ContactUs/ContactUs';
import Reviews from '../Reviews/Reviews';
import SingleReviews from '../Reviews/SingleReviews';
import ToolCard from '../Tools/ToolCard';
import Banner from "./Banner";
import BusinessSummary from './BusinessSummary';
import CountDown from './CountDown';
import ReviewSwiper from './ReviewSwiper';

const Home = () => {
    const { isLoading, data: products } = useQuery('products', () => fetch('https://toolmine-app.herokuapp.com/products')
        .then(res => res.json())
    )
    const { reviewLoading, data: reviews } = useQuery('reviews', () => fetch('https://toolmine-app.herokuapp.com/reviews')
        .then(res => res.json())
    )

    if (isLoading || reviewLoading) {
        return <Spinner />
    }

    return (
        <div>
            <Banner />

            <div className='w-11/12 mx-auto my-20'>
                <h1 className='text-white text-center text-3xl font-semibold my-10'>
                    <span className='p-1 border-b-2 border-primary'>Our <span className='text-primary'>Product</span></span>
                </h1>
                <div className='grid mx-auto grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        products.slice(0, 3).map(product => <ToolCard
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='tools' className='btn btn-primary my-5'>See more</Link>
                </div>
            </div>

            <BusinessSummary />

            <div className='w-11/12 mx-auto my-20'>

                <h1 className='text-white text-center text-3xl font-semibold my-10'>
                    <span className='p-1 border-b-2 border-primary'>Re<span className='text-primary'>views</span></span>
                </h1>

                <div>
                    <ReviewSwiper />
                </div>

                <div className='flex justify-center'>
                    <Link to='reviews' className='btn btn-primary my-5'>See more</Link>
                </div>

            </div>

            <CountDown />

            <ContactUs />

        </div>
    );
};

export default Home;