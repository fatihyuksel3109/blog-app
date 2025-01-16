import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
const fs = require("fs");

export async function GET(request) {
    try {
        await ConnectDB(); // Ensure DB is connected
        const blogId = request.nextUrl.searchParams.get("id");
        if (blogId) {
            const blog = await BlogModel.findById(blogId);
            return NextResponse.json(blog);
        } else {
            const blogs = await BlogModel.find({});
            return NextResponse.json({ blogs });
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ success: false, msg: "Failed to fetch blogs" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await ConnectDB(); // Ensure DB is connected
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get("image");
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const imgPath = path.join(process.cwd(), "public", `${timestamp}_${image.name}`);
        await writeFile(imgPath, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get("title"),
            description: formData.get("description"),
            introduction: formData.get("introduction"),
            category: formData.get("category"),
            author: formData.get("author"),
            image: imgUrl,
            author_image: formData.get("author_image"),
        };

        await BlogModel.create(blogData);
        console.log("Blog Saved");
        return NextResponse.json({ success: true, msg: "Blog Added" });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "Failed to add blog" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        await ConnectDB(); // Ensure DB is connected
        const id = request.nextUrl.searchParams.get("id");
        const Blog = await BlogModel.findById(id);

        if (Blog) {
            fs.unlink(`./public${Blog.image}`, () => {});
            await BlogModel.findByIdAndDelete(id);
            return NextResponse.json({ msg: "Blog Deleted" });
        } else {
            return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ success: false, msg: "Failed to delete blog" }, { status: 500 });
    }
}
