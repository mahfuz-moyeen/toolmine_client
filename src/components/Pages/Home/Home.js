import React, { useEffect, useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ToolCard from '../Tools/ToolCard';
import Banner from "./Banner";
import BusinessSummary from './BusinessSummary';
import CountDown from './CountDown';
import Reviews from './Reviews';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Banner />

            <div className='w-11/12 mx-auto my-10'>
                <h1 className='text-white text-center text-3xl font-semibold my-5'>
                    <span className='p-1 border-b-2 border-primary'>Our <span className='text-primary'>Product</span></span>
                </h1>
                <div className='grid mx-auto grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        products.slice(0, 3).map(product => <ToolCard
                            key={product.id}
                            product={product}
                        />)
                    }
                </div>
            </div>

            <BusinessSummary />

            <Reviews />

            <CountDown />

            <ContactUs />

        </div>
    );
};

export default Home;