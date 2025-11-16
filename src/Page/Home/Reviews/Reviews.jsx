import React, { use } from "react";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import cardLogo from "../../../assets/customer-top.png";

const Reviews = ({ ReviewsPromise }) => {
  const data = use(ReviewsPromise);
  console.log(data);
  return (
    <div>
      <div className="text-center pt-10 my-10">
        <img className="flex flex-col   mx-auto" src={cardLogo} alt="" />
        <h1 className="text-[#03373D] text-4xl mt-5">What our customers are sayings</h1>
        <p  className="text-[#606060] max-w-[800px] mx-auto mt-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        
          
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
      >
        {data.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
