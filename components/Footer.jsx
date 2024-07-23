import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className=' flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center' >
        <Image src={assets.logo_light} alt='Logo' width={120} />
        <div className='text-xs text-white'>
        <p>© 2024 Fatih&apos;s Blog. Developed by fatihyuksel. All rights reserverd.</p>
        
        </div>
        <div className='flex gap-1'>
          <Image src={assets.facebook_icon} alt='' width={40} />
          <Image src={assets.x_icon} alt='' width={40} />
          <Image src={assets.googleplus_icon} alt='' width={40} />
        </div>
    </footer>
  )
}
export default Footer