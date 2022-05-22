import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SingleOrder from './SingleOrder';


const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.message) {
                }
                else {
                    setOrders(data)
                }
            })

    }, [user])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>My <span className='text-primary'>Orders</span></span>
            </h1>
            <div className="overflow-x-auto shadow-md">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th className='bg-neutral text-white'></th>
                            <th className='bg-neutral text-white'></th>
                            <th className='bg-neutral text-white'>Product Name</th>
                            <th className='bg-neutral text-white'>Order Quantity</th>
                            <th className='bg-neutral text-white'>Total Price</th>
                            <th className='bg-neutral text-white'></th>
                            <th className='bg-neutral text-white'></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            orders.map((order, index) => <SingleOrder
                                key={order._id}
                                index={index}
                                order={order}
                                orders={orders}
                                setOrders={setOrders}
                            />

                            )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;