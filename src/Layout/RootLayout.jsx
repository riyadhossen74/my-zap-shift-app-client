import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Page/Shared/Navbar/Navbar';
import Footer from '../Page/Shared/Footer/Footer';
import Home from '../Page/Home/Home/Home';


const RootLayout = () => {
    return (
        <div className=' flex flex-col min-h-screen bg-[#EAECED]' >
            <header className='container mx-auto '>
                <Navbar></Navbar>
            </header>
           
           <main className='flex-1 container mx-auto'>
            <Outlet></Outlet> 
           </main>
          <section className=' px-10 container mx-auto'>
             <Footer></Footer>
          </section>
        </div>
    );
};

export default RootLayout;