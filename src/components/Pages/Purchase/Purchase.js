import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import {  toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])


    const onSubmit = async data => {
        const orderData = {
            productName: product.name,
            price: product.price,
            img: product.img,
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            address: data.address,
            orderQuantity: data.items
        }

        await fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(date=>{
            console.log(data);
            toast.success("Successfully, Add Your Purchase Items")
            reset();
        })


    };

    return (
        <div>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Purchase <span className='text-primary'>Item</span></span>
            </h1>
            <div>
                <div className='card'>
                    <div className='w-10/12 mx-auto my-10'>
                        <div className="card lg:card-side bg-white shadow-xl">

                            <figure><img className='hover:scale-110 w-80 h-80 transform duration-100 ease-linear' src={product?.img} alt={product?.name} /></figure>

                            <div className='flex flex-col lg:flex-row justify-evenly'>
                                <div className="card-body lg:w-7/12">

                                    <div className='lg:my-auto'>
                                        <div>
                                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{product?.name}</h2>
                                        </div>
                                        <p className=" lg:text-xl my-2">
                                            <span className=' font-semibold'>Price:</span> ${product?.price} (per unit price)
                                        </p>
                                        <p className="lg:text-lg my-2">
                                            <span className=' font-semibold'>Description:</span> {product?.description}
                                        </p>
                                        <p className="lg:text-lg my-2">
                                            <span className=' font-semibold'>Minimum Order Items:</span> {product?.minQuantity}
                                        </p>
                                        <p className="lg:text-lg my-2">
                                            <span className=' font-semibold'>Available Items:</span> {product?.availableQuantity}
                                        </p>
                                    </div>


                                </div>
                                <div className='card w-full'>
                                    <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                                        <h1 className='text-xl'>Hello {user?.displayName}, <br />Do you want to purchase our items</h1>
                                        {/* name  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                disabled
                                                className="input input-bordered bg-white"
                                                {...register("name")}
                                                defaultValue={user?.displayName}
                                            />
                                        </div>

                                        {/* email  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                disabled
                                                className="input input-bordered bg-white"
                                                {...register("email")}
                                                defaultValue={user?.email}
                                            />
                                        </div>

                                        {/* Phone  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Your phone number"
                                                className="input input-bordered bg-white"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: 'Phone is Required'
                                                    },
                                                    minLength: {
                                                        value: 10,
                                                        message: 'Minimum 10 digit'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                                {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your address"
                                                className="input input-bordered bg-white"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'Address is Required'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Purchase items</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Items quantity"
                                                className="input input-bordered bg-white"
                                                {...register("items", {
                                                    required: {
                                                        value: true,
                                                        message: 'Items is Required'
                                                    },
                                                    min: product?.minQuantity,
                                                    max: product?.availableQuantity
                                                })}
                                            />
                                            <label className="label">
                                                {errors.items?.type === 'required' && <span className="label-text-alt text-red-500">{errors.items.message}</span>}

                                                {errors.items?.type === 'min' && <span className="label-text-alt text-red-500">You have to Purchase minimum {product?.minQuantity} items</span>}

                                                {errors.items?.type === 'max' && <span className="label-text-alt text-red-500">You can't Purchase up to available {product?.availableQuantity} items</span>}
                                            </label>
                                        </div>

                                        <div className="form-control mt-6">
                                            <input type='submit' value='Purchase' className="btn btn-primary" />
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;