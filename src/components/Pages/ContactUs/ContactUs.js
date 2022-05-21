import React from 'react';
import contactBg from '../../../image/contactus/contactUs-bg.jpg'


const ContactUs = () => {

    
    return (
        <div style={{ background: `url(${contactBg})`, backgroundSize: 'cover' }}>
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex flex-col lg:flex-row p-10 gap-5 items-center">
                    <div className="text-center lg:text-right">
                        <h1 className="text-3xl font-bold text-white">Do you have Any <span className='text-primary'>Question</span>
                            <br /> or
                            <br /><span className='text-primary'>information ?</span></h1>
                        <p className="py-6 font-semibold text-gray-400">You have any problem or you need any information message here. Our support team always help you 24h</p>
                    </div>
                    <div className="card rounded lg:rounded-md flex-shrink-0 w-full max-w-md shadow-2xl glass">
                        <div className="card-body">

                            <form >
                                <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name here" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="number" name='phone' placeholder="Your phone number" className="input input-bordered bg-white" required />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered bg-white" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered bg-white" name='message' placeholder="Your message" required></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn block mx-auto btn-primary">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;