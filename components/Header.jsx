import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='blog logo' className='w-32 sm:w-auto' />
            <button className='flex items-center gap-1 hover:scale-105 transition-transform duration-150 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] active:bg-gray-200 '>Get started<Image src={assets.arrow_icon} width={12} alt='arrow icon' /></button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-2xl m-auto text-xs sm:text-base'>Here, we explore tech trends, life hacks, and more. Whether you& apos;re into gadgets or looking for practical tips, you&apos;ll find something of interest. Join us for engaging content and insightful articles designed to enrich your knowledge. Let&apos;s embark on this journey together!</p>
            <form className='flex justify-between max-w-lg scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input type="email" placeholder='Enter your email..' className='p-4 outline-none' />
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
            </form>
        </div>
        
    </div>
  )
}

export default Header