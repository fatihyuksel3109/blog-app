import { assets } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      const response = await axios.post('/api/email', formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error('Error');
      }
    } catch (error) {
      toast.error('An error occurred while submitting your email.');
    }
  };

  return (
    <header className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <div className='w-32 sm:w-auto'>
          <Image src={assets.logo} width={180} height={60} alt='blog logo' />
        </div>
        <button className='flex items-center gap-1 hover:scale-105 transition-transform duration-300 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] active:bg-gray-200'>
          Get started
          <Image src={assets.arrow_icon} width={12} height={12} alt='arrow icon' />
        </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-2xl m-auto text-xs sm:text-base'>
          Here, we explore tech trends, life hacks, and more. Whether you&apos;re into gadgets or looking for practical tips, you&apos;ll find something of interest. Join us for engaging content and insightful articles designed to enrich your knowledge. Let&apos;s embark on this journey together!
        </p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder='Enter your email..' className='p-4 outline-none' />
          <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
