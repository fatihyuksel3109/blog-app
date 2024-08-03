import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ author_image, title, author, date }) => {

  const dateStr = "2024-08-02T14:03:12.867+00:00";
  const BlogDate = new Date(dateStr);

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
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;
