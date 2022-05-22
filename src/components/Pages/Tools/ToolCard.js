import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ product }) => {
    const { id, name, price, img, minQuantity, availableQuantity, description } = product
    return (
        <div className="card max-w-sm mx-auto bg-white shadow-xl">
            <figure><img src={img} alt={name} className=' w-60 h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary font-semibold">
                    {name}
                </h2>
                <p>{description}</p>
                <p className='text-lg text-primary font-semibold'>Price: {price}</p>
                <div className="card-actions items-center justify-between">
                    <div className='flex flex-col gap-2'>
                        <div className="badge badge-outline">Min Oder:{minQuantity}</div>
                        <div className="badge badge-outline">Stock: {availableQuantity}</div>
                    </div>
                    <Link to={`tool/${id}`} className="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;