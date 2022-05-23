import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleUser from './SingleUser';

const MakeAdmin = () => {

    const { isLoading, data: users, refetch } = useQuery(('users'), () => fetch(`http://localhost:5000/users`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
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
                <span className='p-1 border-b-2 border-primary'>Make <span className='text-primary'>Admin</span></span>
            </h1>
            <div>
                <div className="overflow-x-auto shadow-md">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr>
                                <th className='bg-neutral text-white'></th>
                                <th className='bg-neutral text-white'>User Name</th>
                                <th className='bg-neutral text-white'>Email</th>
                                <th className='bg-neutral text-white'></th>
                                {/* <th className='bg-neutral text-white'></th> */}
                            </tr>
                        </thead>
                        <tbody >
                            {
                                users.map((user, index) => <SingleUser
                                    key={user._id}
                                    index={index}
                                    user={user}
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

export default MakeAdmin;