"use client";
import { assets, blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = ( {params} ) => {


 const [data, setData] = useState(null);

 const fetchBlogData = async () => {
    const response = await axios.get('/api/blog' ,{
      params: {
        id: params.id
      }
    })
    setData(response.data);
 }

 useEffect(() => {
    fetchBlogData();
 }, [])


  return ( data? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}><Image src={assets.logo_gray} width={180} alt='' className='w-32 sm:w-auto' /></Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_7px_0px_#0000000] '>
          Get started <Image src={assets.arrow_icon} alt='' width={12} />
        </button>
      </div>
      <div className='text-center my-24' >
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_image} alt='author image' width={54} height={54} />
        <p className='mt-1 pb-2 text-lg max-w-2xl mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-3xl md:mx-auto -mt-24 mb-10'>
      <Image src={data.image} alt='' width={1240} height={720} className='border-4 border-white mx-auto' />
      <h2 className='my-8 text-2xl font-semibold'>Introduction:</h2>
      <p>{data.introduction}</p>
      <h2 className='my-8 text-2xl font-semibold'>Description:</h2>
      <p>{data.description}</p>
      <div className='my-24'>
        <p className='text-black font font-semibold my-4'>Share this article on social media</p>
        <div className='flex gap-4'>
          <Link href={'https://www.facebook.com'} className='hover:scale-150 transition-all duration-300'><Image src={assets.facebook_icon_dark} alt='' width={40} /></Link>
          <Link href={'https://www.x.com'} className='hover:scale-150 transition-all duration-150'><Image src={assets.x_icon_dark} alt='' width={40} /></Link>
          <Link href={'https://www.googleplus.com'} className='hover:scale-150 transition-all duration-150'><Image src={assets.googleplus_icon_dark} alt='' width={40} /></Link>
        </div>
      </div>
    </div>
    <Footer />
    </>: <></>
  )
}
export default Page;