import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';
import paymentCard from '../../../image/payment.png'

const stripePromise = loadStripe('pk_test_51L1p8ACcQVA8yAkmETfwkRuFoyz5y3xpDlFcO7SauwYSOwcE1FaOpEDLqwqVBpbZYyA9kIFweD00JJfAlIHmYE2z00oq05wA4f');

const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(['payment', id], () => fetch(`http://localhost:5000/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Payment <span className='text-primary'>Now</span></span>
            </h1>
            <h2 className='text-2xl text-center my-5 text-accent'>Hello {order?.name},<br /> You want to
                buy this products</h2>
            <div className='w-11/12 mx-auto pb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div className="card w-96 bg-white shadow-xl">
                        <div className='py-10'><h2 className="text-xl text-center">Order Information</h2></div>
                        <figure className="px-10 pt-10">
                            <img src={order?.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body text-start">
                            <p>Product Name: {order?.productName}</p>
                            <div className='flex justify-between'>
                                <p>Product Price (Per Items): </p>
                                <p>$ {order?.price}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Order Quantity (Per Items): </p>
                                <p>{order?.orderQuantity}</p>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <p>Total Price: </p>
                                <p>$ {parseInt(order?.price) * parseInt(order?.orderQuantity)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full my-5 max-w-sm lg:max-w-lg shadow-2xl bg-white">
                        <div className="card-body">
                            <h2 className="text-xl text-center text-success font-semibold">Payment on Card</h2>
                            <figure className="px-10 pt-10">
                                <img src={paymentCard} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className='my-5'>
                                <h1 className='text-xl my-5'>Use Card:</h1>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm order={order} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;