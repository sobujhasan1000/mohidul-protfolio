import { title } from "process";

const blogs = [
  {
    heading: "This is my blog headin",
    title: "blog title",
    details:
      "lorem20 Lorem ipsum dolor sit amettetur adipisicing elit A nostrum voluptatem cupiditateEveniet voluptas odio impedit repellat, ipsam voluptatem! ",
  },
  {
    heading: "This is my blog headin",
    title: "blog title",
    details:
      "lorem20 Lorem ipsum dolor sit amettetur adipisicing elit A nostrum voluptatem cupiditateEveniet voluptas odio impedit repellat, ipsam voluptatem! ",
  },
  {
    heading: "This is my blog headin",
    title: "blog title",
    details:
      "lorem20 Lorem ipsum dolor sit amettetur adipisicing elit A nostrum voluptatem cupiditateEveniet voluptas odio impedit repellat, ipsam voluptatem! ",
  },
  {
    heading: "This is my blog headin",
    title: "blog title",
    details:
      "lorem20 Lorem ipsum dolor sit amettetur adipisicing elit A nostrum voluptatem cupiditateEveniet voluptas odio impedit repellat, ipsam voluptatem! ",
  },
];

const Blog = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-[#0a0909] via-[rgb(42,16,58)] to-[#000000]">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        My Blog Area
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8  mx-auto">
        {blogs.slice(0, 3).map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
            <h1 className="text-xl font-semibold mb-2 text-indigo-700 text-center">
              {blog.heading}
            </h1>
            <h2 className="text-lg font-medium text-gray-700">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.details.slice(0, 100)}</p>
            <button className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-teal-500 transition">
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
