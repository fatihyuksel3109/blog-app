import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import path from 'path';

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export async function GET(request) {
    return NextResponse.json({ msg: 'API working' });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const imgPath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);
        await writeFile(imgPath, buffer);
        const imgUrl = `${timestamp}_${image.name}`;

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
