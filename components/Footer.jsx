import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=' flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center' >
        <Link href={'/'}><Image src={assets.logo_light} alt='Logo' width={120} /></Link>
        <div className='text-xs text-white'>
        <p>© 2024 Fatih&apos;s Blog. Developed by fatihyuksel. All rights reserverd.</p>
        
        </div>
        <div className='flex gap-1'>
          <Link href={'https://www.linkedin.com/in/fatihyuksell'}><Image className='rounded-full p-1'  src={assets.linkedin_icon_dark} alt='' width={40} /></Link>
          <Link href={'https://x.com/fyukseI'}><Image className='rounded-full p-1'  src={assets.x_icon} alt='' width={40} /></Link>
          <Link href={'https://www.instagram.com/byfatihyuksel'}><Image className='rounded-full p-1'  src={assets.instagram_dark} alt='' width={40} /></Link>
        </div>
    </footer>
  )
}
export default Footer