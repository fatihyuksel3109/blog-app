import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogTableItem = ({ author_image, title, author, date, deleteBlog, mongoId}) => {

  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image src={author_image ? author_image : assets.profile_icon} alt="Author image" width={48} height={48} />
        <p>{author ? author : 'No author'}</p>
      </th>
      <td className="px-6 py-4"><Link href={`/blogs/${mongoId}`}>{title ? title : "No blog title"}</Link></td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">X</td>
    </tr>
  );
};

export default BlogTableItem;
