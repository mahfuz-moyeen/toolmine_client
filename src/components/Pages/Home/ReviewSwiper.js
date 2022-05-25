import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./ReviewSwiper.css";

import { Autoplay, FreeMode, Pagination } from "swiper";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import SingleReviews from "../Reviews/SingleReviews";

export default function ReviewSwiper() {

    const { isLoading, data: reviews } = useQuery('reviews', () => fetch('https://toolmine-app.herokuapp.com/reviews')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Swiper
                // slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reviews?.map(review => <SwiperSlide className="py-5" key={review._id}>
                        <SingleReviews
                            review={review}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}
