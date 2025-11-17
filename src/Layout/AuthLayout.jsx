import React from 'react';
import Logo from '../Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div>
            <header className='container mx-auto'>
                <Logo></Logo>
            </header>
            <div className='flex max-w-7xl mx-auto my-15 '>
                <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <section className='flex-1 bg-[#FAFDF0] '>
                <img className='py-40' src={authImg} alt="" />
            </section>
            </div>
        </div>
    );
};

export default AuthLayout;