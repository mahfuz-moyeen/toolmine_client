import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {
    const { isLoading, data: products, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-5'>
                <span className='p-1 border-b-2 border-primary'>Manage <span className='text-primary'>Products</span></span>
            </h1>
            <div>
                <div className='pb-10'>
                    <div className="overflow-x-auto shadow-md">
                        <table className="table w-full text-center">
                            {/* <!-- head --> */}
                            <thead >
                                <tr>
                                    <th className='bg-neutral text-white'></th>
                                    <th className='bg-neutral text-white'></th>
                                    <th className='bg-neutral text-white'>Product Name</th>
                                    <th className='bg-neutral text-white'>Min Quantity</th>
                                    <th className='bg-neutral text-white'>Available Quantity</th>
                                    <th className='bg-neutral text-white'>Price ( Per Item )</th>
                                    <th className='bg-neutral text-white'></th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    products.map((product, index) => <SingleProduct
                                        key={product._id}
                                        index={index}
                                        product={product}
                                        refetch={refetch}
                                    />

                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;