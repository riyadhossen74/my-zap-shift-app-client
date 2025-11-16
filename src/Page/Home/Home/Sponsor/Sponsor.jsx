import React from "react";
import "swiper/css";
import casio from "../../../../assets/brands/casio.png";
import amazon from "../../../../assets/brands/amazon.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import star from "../../../../assets/brands/star.png";
import startPeople from "../../../../assets/brands/start_people.png";
import randstad from "../../../../assets/brands/randstad.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
const brands = [casio, amazon, moonstar, star, startPeople, randstad];

const Sponsor = () => {
  return (
    <div className="my-20 mx-20">
      <h1 className="text-[#03373D] text-center text-3xl my-10">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <div>
          {brands.map((data, index) => (
            <SwiperSlide key={index} data={data}>
              <img src={data} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Sponsor;
