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

    const { data: order, isLoading } = useQuery(['payment', id], () => fetch(`payment/${id}`, {
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
            <h2 className='text-2xl text-center my-5 text-accent'>Hello {'moyyn'},<br /> You want to
                buy this products</h2>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div class="card w-96 bg-white shadow-xl">
                        <div className='py-10'><h2 class="text-xl text-center">Order Information</h2></div>
                        <figure class="px-10 pt-10">
                            <img src={`https://api.lorem.space/image/shoes?w=400&h=225`} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body text-start">
                            <p>Product Name: </p>
                            <div className='flex justify-between'>
                                <p>Product Price (Per Items): </p>
                                <p>100</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Order Quantity (Per Items): </p>
                                <p>50</p>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <p>Total Price: </p>
                                <p>5000</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full my-5 max-w-sm lg:max-w-lg shadow-2xl bg-white">
                        <div className="card-body">
                            <h2 class="text-xl text-center text-success font-semibold">Payment on Card</h2>
                            <figure class="px-10 pt-10">
                                <img src={paymentCard} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div className='my-5'>
                                <h1 className='text-xl my-5'>Use Card:</h1>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={order} />
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