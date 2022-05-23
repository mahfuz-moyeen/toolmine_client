import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { toast } from 'react-toastify';

const SingleProduct = ({ product, index, refetch }) => {
    const { _id, name, price, minQuantity, availableQuantity, img } = product;

    const handleDeleteProduct = id => {
        const url = `http://localhost:5000/product/${id}`
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
            <td className='bg-white'>
                <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td className='bg-white'>{name}</td>
            <td className='bg-white'>$ {price}</td>
            <td className='bg-white'>{minQuantity}</td>
            <td className='bg-white'>{availableQuantity}</td>

            <td className='bg-white'>

                {/* delete button  */}

                <div className="tooltip" data-tip="Delete Product">
                    <button >
                        <label htmlFor={`deleteProduct${_id}`} className="btn btn-error" >
                            <TrashIcon className="h-5 w-5" />
                        </label>
                    </button>
                </div>




                {/* delete order modal  */}
                <input type="checkbox" id={`deleteProduct${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-white">
                        <div className="p-6 text-center">
                            <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 p-2">Are you sure ? <br />
                                you want to delete this Product  <br />  <span className='text-primary'>{name}</span> ?</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleDeleteProduct(_id)}>
                                <label htmlFor={`deleteProduct${_id}`} className="btn btn-error text-white"> Yes, I'm sure</label>
                            </button>

                            <label htmlFor={`deleteProduct${_id}`} className="btn btn-accent text-white">No, cancel</label>
                        </div>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default SingleProduct;