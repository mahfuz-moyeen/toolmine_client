import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { toast } from 'react-toastify';


const SingleUser = ({ user, index, refetch }) => {

    const { _id, userName, email, role } = user;

    const handleMakeAdmin = (id) => {
        fetch(`https://toolmine-app.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th className='bg-white'>{index + 1}</th>

            <td className='bg-white'>{userName}</td>
            <td className='bg-white'>{email}</td>

            <td className='bg-white'>
                {/* make admin button  */}
                {
                    role === 'admin' ?

                        <p className=' badge badge-lg badge-success'>Admin</p>
                        :
                        <button >
                            <label htmlFor="makeAdmin-modal" className="btn btn-accent font-medium" >
                                Make Admin
                            </label>
                        </button>


                }

                {/* modal  */}
                <input type="checkbox" id="makeAdmin-modal" className="modal-toggle" />

                <div className="modal">
                    <div className="modal-box bg-white">
                        <div className="p-6 text-center">
                            <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to make an admin this User</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleMakeAdmin(_id)}>
                                <label htmlFor="makeAdmin-modal" className="btn btn-success"> Yes, I'm sure</label>
                            </button>

                            <label htmlFor="makeAdmin-modal" className="btn btn-error">No, cancel</label>
                        </div>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default SingleUser;