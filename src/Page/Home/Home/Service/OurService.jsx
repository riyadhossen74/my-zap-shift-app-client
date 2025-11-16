import { data } from "react-router";
import Service from "./Service";

const services = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    deprecation:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },
  {
    id: 2,
    title: "Nationwide Delivery ",
    deprecation:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    deprecation:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },

  {
    id: 4,
    title: "Cash on Home Delivery",
    deprecation:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    deprecation:
      "Customized corporate services which includes warehouse and inventory management support.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },
  {
    id: 6,
    title: "Parcel Return",
    deprecation:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    img: "https://i.ibb.co.com/6R5vRPy4/service.png",
  },
];

const OurService = () => {
    console.log(services)
    return (
        <div className="my-20 bg-secondary rounded-2xl">
            <h1 className="text-white text-4xl font-bold text-center pt-20">Our Services</h1>
            <p className=" max-w-[700px]  mx-auto text-center text-[#DADADA] pt-5 text-sm">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           <div className="grid md:grid-cols-3 p-20 gap-20  text-center">
            {
                services.map(data => <Service key={data.id} data={data}></Service>)
            }
            </div> 
        </div>
    );
};

export default OurService;