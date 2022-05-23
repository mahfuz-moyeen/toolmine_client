import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex gap-2">
                {/* <!-- Page content here --> */}

                <label htmlFor="dashboard" className="sticky top-0 h-screen bg-primary p-2 flex items-center text-base-100 text-xl font-bold drawer-button lg:hidden"><ChevronDoubleRightIcon className='w-6 h-6 text-white' /> </label>

                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-neutral text-white gap-2">
                    {/* <!-- Sidebar content here --> */}

                    <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>

                    {/* for user  */}
                    {
                        !admin && <>
                            <li><NavLink to='/dashboard/my-order'>My Orders</NavLink></li>
                            <li><NavLink to='/dashboard/add-reviews'>Add A Review</NavLink></li>
                        </>
                    }

                    {/* for admin  */}
                    {
                        admin && <>
                            <li><NavLink to='/dashboard/make-admin'>Make Admin</NavLink></li>
                            <li><NavLink to='/dashboard/manage-products'>Manage Products</NavLink></li>
                            <li><NavLink to='/dashboard/add-product'>Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/manage-orders'>Manage Orders</NavLink></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;