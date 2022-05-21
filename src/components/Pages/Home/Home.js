import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
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

            <ContactUs />

        </div>
    );
};

export default Home;