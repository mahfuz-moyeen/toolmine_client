import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>About <span className='text-primary'>Us</span></span>
            </h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <h1 className='text-2xl w-6/12 mx-auto bg-gray-300 p-5 rounded-lg'><span className='text-5xl opacity-50'>"</span>
                        Every company says it has the best people in the world, but when you look at our story over the last decade, the proof of that is glaringly apparent. Our constant has been, and will always be, the passion, determination, and all-out obsession of our employees.
                        <br />
                        <span className='text-xl'> Steve Richman <br />
                            Group President of Toolmine</span>
                    </h1>
                    <div className='w-8/12 mx-auto'>
                        <h1 className="text-5xl font-bold">OUR STORY</h1>
                        <p className="py-6">
                            Since the company began in 1924, Toolmine has led the industry in developing innovative solutions that deliver increased productivity and unmatched durability for professional construction users. Whether it is through our world-leading M12™ and M18™ cordless systems, the ground-breaking performance of our M12 and M18 FUEL™ products, jobsite lighting, time-saving accessories, or innovative hand tool and storage products, we are dedicated to delivering a continuous flow of advanced, trade-specific solutions.

                            We invest the time to work side-by-side with real users to understand the demands of a constantly changing workplace and how we can best deliver solutions for a safer, more productive jobsite. Through a thorough evaluation of the job at hand – the frustrations, needs, and previous limitations – we set out to completely rethink a solution and deliver the game-changing innovation seen across all our product lines. Toolmine is not simply a manufacturer – we are progressive problem solvers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;