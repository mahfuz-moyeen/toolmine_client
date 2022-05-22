import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                ...data, name:
                    user?.displayName,
                userImg: user?.photoURL
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Add your review successfully')
                reset();
            })

    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Add <span className='text-primary'>Review</span></span>
            </h1>

            <div>
                <div className='card max-w-sm mx-auto'>
                    <div className=' card-body bg-white'>
                        <h1 className='card-title pb-5'>Hey, {user?.displayName} <br />
                            Add your Review for your products and services
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Rate  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <select className='border-2 border-gray-400 rounded' {...register("rate", {
                                    required: {
                                        value: true,
                                        message: 'Rating is Required'
                                    }
                                })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <label className="label">
                                    {errors.rate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}
                                </label>
                            </div>

                            {/* message  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your Review Message"
                                    className="textarea border-2 border-gray-400  bg-white"
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
                                />
                                <label className="label">
                                    {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                                    {errors.message?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type='submit' value='Add My Review' className="btn btn-accent text-base-100" />
                            </div>

                        </form>
                    </div >
                </div>

                <div>

                </div>
            </div>
        </div >
    );
};

export default AddReview;