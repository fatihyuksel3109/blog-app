import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

function BlogList() {

    const [menu, setMenu] = useState('All');

  return (
    <div>
        <div className="flex justify-center gap-6 my-10">
            <button onClick={() => setMenu('All')}  className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
            <button onClick={() => setMenu('Technology')} className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Technology</button>
            <button onClick={() => setMenu('Wellness')} className={menu === 'Wellness' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Wellness</button>
            <button onClick={() => setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Lifestyle</button>
            <button onClick={() => setMenu('Business')} className={menu === 'Business' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Business</button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 ">
            {
                blog_data.filter((item) => menu === 'All' ? true : item.category === menu ).map((item, index) => {
                  return  <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
                })
            }
        </div>
    </div>
  )
}

export default BlogList 