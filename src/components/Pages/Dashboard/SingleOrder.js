import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleOrder = ({ order, index, orders, setOrders }) => {
    const { _id, productName, img, orderQuantity, price } = order

    const handleDeleteOrder = id => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const rest = orders.filter(item => item._id !== id)
                setOrders(rest)
                toast.error('Delete Items')
            })
    }

    return (
        <tr>
            <th className='bg-white'>{index + 1}</th>
            <td className='bg-white'>
                <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                        <img src={img} alt={productName} />
                    </div>
                </div>
            </td>
            <td className='bg-white'>{productName}</td>
            <td className='bg-white'>{orderQuantity}</td>
            <td className='bg-white'>$ {price * orderQuantity}</td>
            <td className='bg-white'>
                <div className='flex flex-row justify-center items-center'>
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-success'>Pay Now</Link>}

                    <p>
                        {(order.price && order.paid) &&
                            <span className=' badge badge-lg badge-outline badge-success'>Paid</span>
                        }

                        {order.shipped ?
                            <span className=' badge badge-lg badge-success mx-2'>Shipped</span>
                            :
                            <span className=' badge badge-lg badge-warning mx-2'>Pending</span>
                        }
                    </p>
                </div>

                {order.transactionId && <p><span className='badge my-2 py-1'>Transaction Id: {order.transactionId}</span></p>}

            </td>
            <td className='bg-white'>
                {/* delete button  */}
                {(
                    order.price && !order.paid)
                    &&
                    <div className="tooltip" data-tip="Delete Item">
                        <button >
                            <label htmlFor={order._id} className="btn bg-rose-600 border-0 hover:bg-rose-700 font-medium" >
                                <TrashIcon className="h-5 w-5" />
                            </label>
                        </button>
                    </div>

                }

                {/* modal  */}
                <input type="checkbox" id={_id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-white">
                        <div className="p-6 text-center">
                            <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleDeleteOrder(_id)}>
                                <label htmlFor={_id} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Yes, I'm sure</label>
                            </button>

                            <label htmlFor={_id} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</label>
                        </div>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default SingleOrder;