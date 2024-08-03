import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ author_image, title, author }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image src={author_image ? author_image : assets.profile_icon} alt="Author image" width={48} height={48} />
        <p>{author ? author : 'No author'}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No blog title"}</td>
      <td className="px-6 py-4">{"01 Sep 2024"}</td>
      <td className="px-6 py-4 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;
