import React from 'react';

const Work = ({data}) => {
   
    return (
        <div className='shadow p-5 hover:shadow-2xl rounded-2xl '>
            <img src={data.img} alt="" />
            <h1 className='text-[#03373D] text-2xl my-3'>{data.title}</h1>
            <p className='text-[#606060] text-sm'>{data.deprecation}</p>
        </div>
    );
};

export default Work;