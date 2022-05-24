import React from 'react';
import Rating from 'react-rating';
import startFull from '../../../image/rating/star-solid.svg'
import startEmpty from '../../../image/rating/star-regular.svg'
import usericon from '../../../image/summery/icon/users.svg'

const SingleReviews = ({ review }) => {
    const { name, userImg, message, rate } = review
    return (
        <div className="card w-10/12 mx-auto lg:max-w-md bg-white shadow-xl">
            <div className="card-body mx-auto text-center">

                <div className="avatar mx-auto">
                    <div className="w-16 mask mask-hexagon">
                        {
                            userImg ?
                                <img src={userImg} />
                                : <img src={usericon} />
                        }
                    </div>
                </div>

                <h2 className="card-title mx-auto">{name}</h2>
                <p>{message}</p>
                <div className="card-actions justify-center">
                    <p>Rating:</p>
                    <Rating
                        initialRating={rate}
                        emptySymbol={<img src={startEmpty} alt='start-empty'
                            className='w-6 h-6'
                        />}
                        fullSymbol={<img src={startFull} alt='start-empty'
                            className='w-6 h-6'
                        />}
                        readonly
                    ></Rating>
                </div>
            </div>
        </div>
    );
};

export default SingleReviews;