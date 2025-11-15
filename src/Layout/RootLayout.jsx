import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Page/Shared/Navbar/Navbar';
import Footer from '../Page/Shared/Footer/Footer';
import Home from '../Page/Home/Home/Home';


const RootLayout = () => {
    return (
        <div className='container mx-auto flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
           <section>
            <Home></Home>
           </section>
           <main className='flex-1'>
            <Outlet></Outlet> 
           </main>
          <section className=' px-10 '>
             <Footer></Footer>
          </section>
        </div>
    );
};

export default RootLayout;