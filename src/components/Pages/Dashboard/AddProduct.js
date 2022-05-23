import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '86f5dca2ba21afd9927d840cd5b6d0c0';

    const onSubmit = async data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);

        // imgbb.com database
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: parseInt(data.price),
                        minQuantity: parseInt(data.minQuantity),
                        availableQuantity: parseInt(data.availableQuantity),
                        img: img
                    }


                    // post to mongodb server
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Add your product successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the your product');
                            }
                        })

                }

            })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-5'>
                <div className='card mx-auto'>
                    <div className=' card-body bg-white'>
                        <h1 className='text-center text-3xl font-semibold'>
                            <span className='p-1 border-b-2 border-primary'>Add <span className='text-primary'>Product</span></span>
                        </h1>
                        <h1 className='card-title my-2 justify-center'>Hey {user?.displayName},  Your want to add your product?
                        </h1>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='grid grid-cols-1 lg:grid-cols-2 gap-3'
                        >

                            <div>
                                {/*  Product name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Product Name"
                                        className="input input-bordered bg-white"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Product Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>

                                {/* image  */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="bg-white"
                                        {...register("img", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                    </label>
                                </div>

                                {/* description  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Your Product Description"
                                        className="textarea border-2 h-40 border-gray-400  bg-white"
                                        {...register("description", {
                                            required: {
                                                value: true,
                                                message: 'Description is Required'
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: 'You use maximum 250 characters'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                                        {errors.description?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    </label>
                                </div>
                            </div>


                            <div>
                                {/* price  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price ( per item )</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Your Product Price $"
                                        className="input input-bordered bg-white"
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: 'Product Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                    </label>
                                </div>

                                {/* minQuantity  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Minimum Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Set your product minimum value"
                                        className="input input-bordered bg-white"
                                        {...register("minQuantity", {
                                            required: {
                                                value: true,
                                                message: 'Product Minimum Quantity Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                                    </label>
                                </div>

                                {/* availableQuantity  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Set your product available value"
                                        className="input input-bordered bg-white"
                                        {...register("availableQuantity", {
                                            required: {
                                                value: true,
                                                message: 'Product Minimum Quantity Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input type='submit' value='ADD Product' className="btn btn-accent" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;