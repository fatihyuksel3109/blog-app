import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <nav className='flex flex-col bg-slate-100'>
      <div className="flex justify-center px-2 py-3 h-16 border border-black">
        <Image src={assets.logo_admin} alt='logo' width={82} />
      </div>
      <div className='w-32 sm:w-80 h-lvh relative py-12 border border-black'>
        <div className='w-4/ sm:w-5/6 absolute right-0' >
         <Link href='/admin/add-product/' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image className='hidden sm:block' src={assets.add_icon} alt='add icon' width={28} /><p>Add blogs</p>
         </Link>
         <Link href='/admin/blog-list/' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image className='hidden sm:block' src={assets.blog_icon} alt='add icon' width={28} /><p>Blog lists</p>
         </Link>
         <Link href='/admin/subscriptions/' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:scale-105 transition-all duration-150'>
          <Image className='hidden sm:block' src={assets.email_icon} alt='add icon' width={28} /><p>Subscriptions</p>
         </Link>
        </div>
      </div>
    </nav>
  )
}

export default SideBar