import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import contactBg from '../../../image/contactus/contactUs-bg.jpg'


const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        fetch('https://toolmine-app.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Your message send  successfully')
                reset();
            })

    }


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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Name here" className="input input-bordered bg-white"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'name is Required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="number" placeholder="Your phone number" className="input input-bordered bg-white"  {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'phone number is Required'
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" className="input input-bordered bg-white"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'email is Required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered bg-white" placeholder="Your message"
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: 'message is Required'
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: 'You use maximum 250 characters'
                                            }
                                        })}
                                    ></textarea>
                                    <label className="label">
                                        {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                                        {errors.message?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn block mx-auto btn-primary">Send message</button>
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