import React from 'react';
import Banner from '../Banner/Banner';
import HowItIsWork from '../HowItIsWork/HowItIsWork';
import OurService from './Service/OurService';

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
        </div>
    );
};

export default Home;