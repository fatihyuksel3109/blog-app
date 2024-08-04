import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import path from 'path';
const fs = require('fs');

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

//API Endpoint to get all Blogs from DB
export async function GET(request) {

    
    const blogId = request.nextUrl.searchParams.get('id');
    if(blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }

}


// API Endpoint for Uploading Blogs
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const imgPath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);
        await writeFile(imgPath, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            introduction: formData.get('introduction'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            author_image: formData.get('author_image'),
        };

        await BlogModel.create(blogData);
        console.log('Blog Saved');
        return NextResponse.json({ success: true, msg: 'Blog Added' });
    } catch (error) {
        console.error('Error saving blog:', error);
        return NextResponse.json({ success: false, msg: 'Failed to add blog' }, { status: 500 });
    }
}


// API Endpoint to DELETE blog

export async function Delete(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const Blog = await BlogModel.findById(id);
    fs.unlink(`./public${Blog.image}`, () => {})
    await BlogModel.findByIdAndDelete('id');
    return NextResponse.json({msg: 'Blog Deleted'});
} 