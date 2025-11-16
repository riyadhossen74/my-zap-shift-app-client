import React from 'react';

const Service = ({data}) => {
    console.log(data)
    return (
        <div className='bg-white p-8 flex flex-col items-center justify-center rounded-2xl hover:bg-primary'>
        <img src={data.img} alt="" />
        <h1 className='text-[#03373D] text-2xl font-bold'>{data.title}</h1>
        <p className='text-[#606060] mt-5'>{data.deprecation}</p>
        </div>
    );
};

export default Service;