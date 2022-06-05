import React from 'react';
import { useQuery } from 'react-query';
import upcommingBg from '../../../image/upcomming_bg.jpg'
import Spinner from '../../Shared/Spinner/Spinner';

const NewProduct = () => {
    const { isLoading, data: newProducts } = useQuery('newProducts', () => fetch('newProducts.json')
        .then(res => res.json())
    )


    if (isLoading) {
        return <Spinner />
    }
    return (
        <div style={{ background: `url(${upcommingBg})`, backgroundSize: 'cover' }} className="py-5">
            <div class="card rounded-none items-center card-side bg-transparent shadow-xl">
                <div className='text-center p-3'>
                    <h2 className='text-white font-semibold text-2xl'>NEW PRODUCT</h2>
                    <h1 className='text-white font-bold font-serif text-4xl'>PIPELINE</h1>
                    <h3 className='text-white'>Your Exclusive Source Of Truth For What's New From Milwaukee Tool</h3>
                </div>
                <div class="card-body grid grid-cols-1 lg:grid-cols-4">
                    {
                        newProducts.map(item => <div key={item.id}>
                            <div class="card max-w-sm bg-white shadow-xl">
                                <p className=' badge'>Comming Soon</p>
                                <figure><img src={item.img} alt="tool" /></figure>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewProduct;