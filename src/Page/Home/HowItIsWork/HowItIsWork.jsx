import React from "react";
import Work from "./Work";

const ItIsWork = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    deprecation:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: "https://i.ibb.co.com/D27jSsB/booking-Icon.png",
  },
  {
    id: 2,
    title: "Cash On Delivery ",
    deprecation:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: "https://i.ibb.co.com/D27jSsB/booking-Icon.png",
  },
  {
    id: 3,
    title: "Delivery Hub",
    deprecation:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: "https://i.ibb.co.com/D27jSsB/booking-Icon.png",
  },

  {
    id: 4,
    title: "Booking SME & Corporate",
    deprecation:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: "https://i.ibb.co.com/D27jSsB/booking-Icon.png",
  },
];

const HowItIsWork = () => {
  
  return (
    <div className="my-10">
        <h1 className="text-3xl font-extrabold">How it Works</h1>
      <div className=" grid md:grid-cols-4 gap-20 my-10 ">
        {ItIsWork.map((data) => (
          <Work key={data.id} data={data}></Work>
        ))}
      </div>
    </div>
  );
};

export default HowItIsWork;
