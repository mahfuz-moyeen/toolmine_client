import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';
import useToken from '../../../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    if (loading || sending) {
        return <Spinner />
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    };

    const handleForgetPassword = event => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        sendPasswordResetEmail(email);
    }

    return (
        <div>
            <div className=' bg-neutral'>
                <div className="hero min-h-screen lg:max-w-md mx-auto max-w-sm">
                    <div className="card  w-full shadow-2xl bg-white my-10">
                        <div className="card-body">
                            <h1 className='text-center text-2xl'>Login</h1>


                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* email  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered bg-white"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>

                                {/* password  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered bg-white"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            },
                                            pattern: {
                                                value: /(?=.*?[#?!@$%^&*-])/,
                                                message: 'At least one special character'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>


                                <label
                                    htmlFor="forget-password-modal"
                                    className="label label-text-alt link link-hover">
                                    Forgot password?
                                </label>
                                {
                                    error ?
                                        <p className='text-center text-red-500 my-2'>{error.message.slice(22)}</p>
                                        :
                                        <></>
                                }
                                <div className="form-control mt-6">
                                    <input type='submit' value='Login' className="btn btn-primary" />
                                </div>

                            </form>

                            <p className='text-center my-2'>Don't have an account?
                                <Link to='/register' className='text-primary' >Create new account</Link>
                            </p>

                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="forget-password-modal" className="modal-toggle" />
                <div className="modal modal-middle">
                    <div className="modal-box bg-white">
                        <label htmlFor="forget-password-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <h3 className="font-bold text-xl text-center mt-10 text-primary">Forget Password ?</h3>
                        <p className='text-center px-10 py-3'>Please enter your email address to send reset password mail.</p>
                        <form
                            onSubmit={handleForgetPassword}
                            className='flex flex-col justify-center items-center gap-5 mt-10'>

                            <input type="email" name='email' placeholder='Your Email' className="input w-full border-base-300 bg-white" required />

                            <input type='submit' value='Send' className='btn btn-accent text-base' />
                        </form>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Login;