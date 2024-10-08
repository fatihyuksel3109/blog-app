import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogItem({image, category, title, introduction, id}) {
  return (
    <div className='max-w-xs sm:max-w-72 bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] hover:scale-105 transition-all duration-300'>
        <Link href={`/blogs/${id}`}>
            <Image src={image} alt="" width={400} height={400} className='border-b min-h-52 max-h-52 border-black' />
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>
            {category}
        </p>
        <div className="p-5">
            <h5 className='mb-2 min-h-14 text-lg font-medium tracking-tight text-gray-800 '>
                {title}
            </h5>
            <p className='mb-3 text-sm min-h-14 tracking-tight text-gray-600'>
                {introduction }
            </p>
            <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center gap-1">
                Read More <Image src={assets.arrow_icon} alt='arrow icon' width={12} />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem