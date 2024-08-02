"use client";
import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    introduction: '',
    description: '',
    category: 'Technology',
    author: 'Thomas Bennett',
    author_image: '/author_image.jpg',
  });

  const router = useRouter();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('introduction', data.introduction);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('author_image', data.author_image);
    formData.append('image', image);

    try {
      // Show a pending toast while the request is being processed
      await toast.promise(
        axios.post('/api/blog', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then(response => {
          if (response.data.success) {
            // Resolve the toast promise with the success message
            return response.data.msg;
          } else {
            // Reject the toast promise with the error message
            throw new Error('Error: ' + response.data.msg);
          }
        }),
        {
          pending: 'Submitting your blog...',
          success: 'Blog added successfully! Redirecting...',
          error: 'An error occurred while submitting the form',
        }
      );
      // Delay the redirection to allow the success toast to be visible
      setTimeout(() => {
        router.push('/');
      }, 2500); // 2000ms = 2 seconds
    } catch (error) {
      console.error('There was an error!', error);
      // Toastify will handle error display, so no additional action needed here
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4 ml-8"
          src={!image ? assets.upload_icon : URL.createObjectURL(image)}
          width={90}
          height={60}
          alt="upload icon"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        name="image"
        hidden
        required
      />
      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="w-full rounded-lg sm:max-w-lg mt-4 px-4 py-3 border"
        type="text"
        placeholder="Enter blog title here..."
        required
      />
      <p className="text-xl mt-4">Blog introduction</p>
      <input
        name="introduction"
        onChange={onChangeHandler}
        value={data.introduction}
        className="w-full rounded-lg sm:max-w-lg mt-4 px-4 py-3 border"
        type="text"
        placeholder="Enter a brief introduction here..."
        required
      />
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full rounded-lg sm:max-w-lg mt-4 px-4 py-3 border"
        type="text"
        placeholder="Enter the blog content here..."
        rows={6}
        required
      />
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-fit text-gray-500 px-4 py-3 border border-gray-300 text-lg mt-4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
      >
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Business">Business</option>
      </select>
      <button type="submit" className="mt-8 w-52 h-14 text-lg bg-black text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">Add</button>
    </form>
  );
};

export default Page;
