import React from 'react';
import bgImg from '../../assets/merchantbg.png'
import rightImg from '../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div
      className=" rounded-3xl p-10 md:p-20 bg-[#03373D] mx-20 "
      style={{
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "-40px top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1200px",
}}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h1>

          <p className="text-sm md:text-base mt-4 text-gray-300">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Our courier delivers your parcels in every
            corner of Bangladesh right on time.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="bg-[#D1FA55] text-black px-6 py-3 rounded-full font-medium hover:shadow-xl transition">
              Become a Merchant
            </button>

            <button className="border border-[#D1FA55] text-[#D1FA55] px-6 py-3 rounded-full hover:bg-[#d1fa5533] transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img src={rightImg} alt="box-img" className="w-[330px] md:w-[420px]" />
        </div>

      </div>
    </div>
    );
};

export default Merchant;