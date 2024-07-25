"use client";
import { assets, blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = ( {params} ) => {


 const [data, setData] = useState(null);

 const fetchBlogData = () => {
    for(let i = 0; i < blog_data.length; i++)
    {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
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
      <p>{data.description}</p><h3 className='my-5 text-lg font-semibold'>Introduction to Freelancing Tools</h3>
      <p className='my-3'>Freelancers face unique challenges that can often be mitigated by the right set of tools. From managing projects to handling finances, the digital age provides a plethora of solutions to ensure that freelancers can operate efficiently and professionally.</p>
      <p className='my-3'>Selecting the right tools can make a significant difference in productivity and work-life balance. In this guide, we will explore some of the most essential tools that every freelancer should consider integrating into their workflow.</p>
      
      <h3 className='my-5 text-lg font-semibold'>Project Management Tools</h3>
      <p className='my-3'>Project management tools are crucial for keeping track of tasks, deadlines, and collaboration with clients. Tools such as Trello, Asana, and Monday.com offer intuitive interfaces and powerful features that help freelancers stay organized and meet their project goals.</p>
      <p className='my-3'>These platforms allow for easy tracking of progress, assignment of tasks, and communication with stakeholders, ensuring that projects are completed on time and to the client&apos;s satisfaction.</p>
      
      <h3 className='my-5 text-lg font-semibold'>Time Tracking Solutions</h3>
      <p className='my-3'>Effective time management is key to freelancing success. Time tracking tools like Toggl, Harvest, and Clockify help freelancers monitor how much time is spent on various tasks, providing insights into productivity and areas for improvement.</p>
      <p className='my-3'>These tools often include features such as invoicing and reporting, making it easier to bill clients accurately and analyze work patterns to optimize efficiency.</p>
      
      <h3 className='my-5 text-lg font-semibold'>Communication Platforms</h3>
      <p className='my-3'>Clear and effective communication is essential for any freelancer. Platforms such as Slack, Zoom, and Microsoft Teams facilitate seamless interaction with clients and team members, regardless of geographical location.</p>
      <p className='my-3'>These tools support real-time messaging, video conferencing, and file sharing, ensuring that all parties are on the same page and that collaboration is smooth and effective.</p>
      
      <h3 className='my-5 text-xl font-semibold'>Conclusion</h3>
      <p className='my-3'>In conclusion, the right tools can significantly enhance a freelancer&apos;s ability to manage their work effectively and maintain a healthy work-life balance. By integrating project management, time tracking, and communication tools into their workflow, freelancers can streamline their operations and focus on delivering high-quality work to their clients.</p>
      <p className='my-3'>Staying updated with the latest tools and continuously refining one&apos;s toolkit is a proactive approach to thriving in the competitive freelancing landscape.</p>
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