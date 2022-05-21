import React from 'react';
import Banner from "./Banner";
import BusinessSummary from './BusinessSummary';
import CountDown from './CountDown';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />

            <BusinessSummary />

            <Reviews />
            
            <CountDown />

        </div>
    );
};

export default Home;