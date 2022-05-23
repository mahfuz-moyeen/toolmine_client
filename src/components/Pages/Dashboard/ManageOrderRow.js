import React from 'react';
import { toast } from 'react-toastify';
import { ExclamationCircleIcon, TruckIcon, XIcon } from '@heroicons/react/solid';

const ManageOrderRow = ({ order, index, refetch }) => {

    const { _id, productName, price, email, orderQuantity } = order



    const handleShippedOrder = id => {
        const url = `https://toolmine-app.herokuapp.com/shipped/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Shipped Order Successfully')
                refetch()
            })
    }

    const handleDeleteOrder = id => {
        const url = `https://toolmine-app.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.error('Delete Order')
                refetch()
            })
    }

    return (
        <tr>
            <th className='bg-white'>{index + 1}</th>
            <td className='bg-white'>{productName}</td>
            <td className='bg-white'>{email}</td>
            <td className='bg-white'>{orderQuantity}</td>
            <td className='bg-white'>$ {price * orderQuantity}</td>

            <td className='bg-white'>
                {order.paid && <div
                    className="tooltip tooltip-left"
                    data-tip={`Transaction Id: ${order.transactionId}`}>
                    <span className=' badge badge-lg badge-outline badge-success'>Paid</span>
                </div>
                }

                {
                    (order.paid && order.shipped) &&
                    <span className=' badge badge-lg badge-success mx-3'>Shipped</span>
                }

                {
                    (order.paid && !order.shipped) &&
                    <div className="tooltip" data-tip="Shipped Order">
                        <button className='mx-2'>
                            <label htmlFor={`shippedOrder${_id}`} className="btn btn-warning" >
                                Pending...
                            </label>
                        </button>
                    </div>
                }


                {/* delete button  */}
                {!order.paid
                    &&
                    <>
                        <span className=' badge badge-lg badge-outline badge-error mx-2'>Unpaid</span>
                        <div className="tooltip" data-tip="Delete Order">
                            <button >
                                <label htmlFor={`deleteOrder${_id}`} className="btn btn-error" >
                                    Cancel <XIcon className="h-5 w-5" />
                                </label>
                            </button>
                        </div>
                    </>
                }


                {/* shipped order modal  */}
                <input type="checkbox" id={`shippedOrder${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-white">
                        <div className="p-6 text-center">
                            <TruckIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-green-500' />
                            <h3 className="mb-5 text-lg font-normal">Shipping this product?</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleShippedOrder(_id)}>
                                <label htmlFor={`shippedOrder${_id}`} className="btn btn-success text-white">Shipped</label>
                            </button>

                            <label htmlFor={`shippedOrder${_id}`} className="btn btn-error text-white">Cancel</label>
                        </div>

                    </div>
                </div>

                {/* delete order modal  */}
                <input type="checkbox" id={`deleteOrder${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-white">
                        <div className="p-6 text-center">
                            <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this order?</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleDeleteOrder(_id)}>
                                <label htmlFor={`deleteOrder${_id}`} className="btn btn-error text-white"> Yes, I'm sure</label>
                            </button>

                            <label htmlFor={`deleteOrder${_id}`} className="btn btn-accent text-white">No, cancel</label>
                        </div>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ManageOrderRow;