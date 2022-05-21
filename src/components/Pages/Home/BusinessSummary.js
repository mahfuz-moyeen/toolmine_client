import React from 'react';
import summeryBg from '../../../image/summery/summery-bg.jpg'
import chart from '../../../image/summery/icon/chart.svg'
import screwdriver from '../../../image/summery/icon/screwdriver.svg'
import reviews from '../../../image/summery/icon/users-solid.svg'
import cusmoter from '../../../image/summery/icon/users.svg'

const BusinessSummary = () => {
    const summeries = [
        {
            name: 'Customers',
            number: '100+',
            icon: cusmoter,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            name: 'Annual revenue',
            number: ' 120M+',
            icon: chart,
        },
        {

            name: 'Reviews',
            number: '33K+',
            icon: reviews,
        },
        {

            name: 'Tools',
            number: ' 50+',
            icon: screwdriver,
        }
    ]

    return (
        <div style={{ background: `url(${summeryBg})`, backgroundSize: 'cover' }}>
            <div className='w-11/12 mx-auto py-10'>
                <h1 className='text-white text-center text-3xl font-semibold my-5'>
                    <span className='p-1 border-b-2 border-primary'>Business <span className='text-primary'>Summary</span></span>
                </h1>
                <h2 className='text-2xl text-center mb-5'>we served,</h2>

                <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    {
                        summeries.map((summery, index) => <div key={index} className={`card lg:card-side px-0 py-5 lg:px-5 lg:py-0 shadow-xl bg-white`}>
                            <figure>
                                <img src={summery.icon} alt="Album" className=' w-16 h-16 lg:w-10 lg:h-10' />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title mx-auto text-3xl text-center">{summery.number}</h1>
                                <h2 className="text-center">{summery.name}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div >
        </div>
    );
};

export default BusinessSummary;