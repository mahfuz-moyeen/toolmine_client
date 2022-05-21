import React from 'react';

const SingleReviews = ({ review }) => {
    const { name, text, rate } = review
    return (
        <div className="card max-w-sm lg:max-w-md bg-white shadow-xl">
            <div className="card-body mx-auto text-center">

                <div className="avatar mx-auto">
                    <div className="w-24 mask mask-hexagon">
                        <img src="https://api.lorem.space/image/face?hash=55350" />
                    </div>
                </div>

                <h2 className="card-title mx-auto">{name}</h2>
                <p>{text}</p>
                <div className="card-actions justify-center">
                    <p>Rating :{rate}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReviews;