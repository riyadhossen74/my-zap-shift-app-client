import React from 'react';
import Banner from '../Banner/Banner';
import HowItIsWork from '../HowItIsWork/HowItIsWork';
import OurService from './Service/OurService';
import Sponsor from './Sponsor/Sponsor';
import SupportService from './SupportService/SupportService';
import Reviews from '../Reviews/Reviews';

const ReviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div>
          <section className='my-5'>
             <Banner></Banner>
          </section>
          <section>
            <HowItIsWork></HowItIsWork>
          </section>
          <section>
            <OurService></OurService>
          </section>
          <section>
            <Sponsor></Sponsor>
          </section>
         <section>
           <SupportService></SupportService>
         </section>
         <section>
          <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
         </section>
        </div>
    );
};

export default Home;