"use client";
import Image from "next/image";
import { useState } from "react";

export interface BlogPost {
  heading: string;
  title: string;
  details: string;
  image: string;
}

const Blog = ({ blogs }: { blogs: BlogPost[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const openModal = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <div className="py-12 bg-[#AFDCEC]">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        My Blog Area
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
            <h1 className="text-xl font-semibold mb-2 text-indigo-700 text-center">
              {blog.heading}
            </h1>

            {/* Optimized Image */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={blog.image} // Image URL
                alt={blog.heading}
                layout="fill" // Fill the parent container
                objectFit="cover" // Crop and scale the image properly
                className="rounded-md"
              />
            </div>

            <h2 className="text-lg font-medium text-gray-700">{blog.title}</h2>
            <p className="text-gray-600 mb-4">
              {blog.details.slice(0, 100)}...
            </p>
            <button
              onClick={() => openModal(blog)}
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-teal-500 transition"
            >
              See Details
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedBlog.heading}
            </h2>
            <h3 className="text-xl font-medium mb-2">{selectedBlog.title}</h3>
            <p className="mb-4">{selectedBlog.details}</p>
            <button
              onClick={closeModal}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
