import { async } from '@firebase/util';
import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UpdateProfile = ({ showUser, setShowUser, refetch }) => {
    const { userName, email } = showUser;
    const [updateProfile] = useUpdateProfile(auth);

    const handleModalForm = async event => {
        event.preventDefault();
        const userName = event.target.name.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkedIn = event.target.linkedIn.value;

        const data = {
            userName,
            phone,
            education,
            location,
            linkedIn
        }
        console.log(data);
        setShowUser(null)

        await fetch(`https://toolmine-app.herokuapp.com/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Update Successful`)

                // clear form 
                event.target.reset();

                // close modal 
                setShowUser(null)

                refetch();
            })

        await updateProfile({ displayName: userName });

    }

    return (
        <>
            {/* modal  */}
            <input type="checkbox" id="updateUser-modal" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box w-11/12 max-w-2xl bg-white">
                    <label htmlFor="updateUser-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Update Your Profile</h3>

                    <form
                        onSubmit={handleModalForm}
                        className='flex flex-col justify-center items-center gap-5 mt-10'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="name" name='name' placeholder="Your name" className="input w-full border-base-300 bg-white" defaultValue={userName} required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name='email' className="input w-full border-base-300" value={email} disabled required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>

                            <input type="number" name='phone' placeholder="Phone Number" className="input w-full border-base-300 bg-white"
                                defaultValue={showUser?.phone}
                                required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>

                            <input type="text" name='education' placeholder="Your education" className="input w-full border-base-300 bg-white"
                                defaultValue={showUser?.education}
                                required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>

                            <input type="text" name='location' placeholder="Your City/State" className="input w-full border-base-300 bg-white"
                                defaultValue={showUser?.location}
                                required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">LinkedIn</span>
                            </label>

                            <input type="text" name='linkedIn' placeholder="linkedIn Profile link" className="input w-full bg-white border-base-300"
                                defaultValue={showUser?.linkedIn}
                                required />

                        </div>

                        <input type='submit' value='Submit' className='btn btn-accent text-white' />
                    </form>

                </div>
            </div >
        </>
    );
};

export default UpdateProfile;