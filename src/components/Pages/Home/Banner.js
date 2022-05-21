import React from 'react';
import bannerBg from '../../../image/banner/banner-bg.jpg'
import banner from '../../../image/banner/banner.jpg'

const Banner = () => {
    return (
        <div className={`hero min-h-screen px-10`} style={{ background: `url(${bannerBg})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='tools' className='lg:max-w-lg rounded-lg shadow-2xl' />
                <div>
                    <h1 className="text-5xl font-bold text-white">MOST VERSATILE. MOST DURABLE.</h1>
                    <p className="py-6 text-white">Every company says it has the best people in the world, but when you look at our story over the last decade, the proof of that is glaringly apparent.</p>
                    <button className="btn btn-primary text-white border-0">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;