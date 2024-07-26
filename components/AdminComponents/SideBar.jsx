import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <nav className='flex flex-col bg-slate-100'>
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} alt='logo' width={80} />
      </div>
      <div className='w-28 sm:w-80 h-lvh relative py-12 border border-black'>
        <div className='w-1/2 sm:w-4/5 absolute right-0' >
         <Link href='/admin/add-product/' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image src={assets.add_icon} alt='add icon' width={28} /><p>Add blogs</p>
         </Link>
         <Link href='/admin/blog-list/' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image src={assets.blog_icon} alt='add icon' width={28} /><p>Blog lists</p>
         </Link>
         <Link href='/admin/subscriptions/' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image src={assets.email_icon} alt='add icon' width={28} /><p>Subscriptions</p>
         </Link>
        </div>
      </div>
    </nav>
  )
}

export default SideBar