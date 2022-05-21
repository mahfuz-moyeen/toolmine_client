import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const Tools = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    products.map(product => <ToolCard
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;