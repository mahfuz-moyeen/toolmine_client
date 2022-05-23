import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const { isLoading, data: orders ,refetch} = useQuery('orders', () => fetch('http://localhost:5000/usersOrders', {
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
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Manage <span className='text-primary'>Orders</span></span>
            </h1>
            <div>
                <div className="overflow-x-auto shadow-md">
                    <table className="table w-full text-center">
                        {/* <!-- head --> */}
                        <thead >
                            <tr>
                                <th className='bg-neutral text-white'></th>
                                <th className='bg-neutral text-white'>Product Name</th>
                                <th className='bg-neutral text-white'>User Email</th>
                                <th className='bg-neutral text-white'>Quantity</th>
                                <th className='bg-neutral text-white'>Total Price</th>
                                <th className='bg-neutral text-white'></th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                orders.map((order, index) => <ManageOrderRow
                                    key={order._id}
                                    index={index}
                                    order={order}
                                    refetch={refetch}
                                />

                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;