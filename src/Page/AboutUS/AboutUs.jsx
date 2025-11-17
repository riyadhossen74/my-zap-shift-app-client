import React from 'react';
import { Link, NavLink } from 'react-router';

const AboutUs = () => {
    return (
        <div className='bg-white  rounded-3xl   my-20 '>
           <div className='px-10 p-10 '>
            <div className='pb-10 '>
            <h1 className='text-4xl font-bold my-5'>About Us</h1>
            <p className='text-sm text-[#606060]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           </div>
           <p className='border border-gray-200 my-10'></p>
           <ul className='space-x-3.5'>
           <Link>Story</Link>
           <Link>Mission</Link>
           <Link>Success</Link>
           <Link>Team & Other</Link>
           </ul>
           <div>
            <p className='my-5 text-sm text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
            <p className='my-5 text-sm text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
            <p className='my-5 text-sm text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
           </div>
           </div>
        </div>
    );
};

export default AboutUs;