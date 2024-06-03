import Image from "next/image";
import webLaptops from "../../../public/screenShot web/chemisty shot.png";
import webChemistry from "../../../public/screenShot web/laptops web screenshot.png";

const Project = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-8">
        Look at my Latest Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
          <div className="overflow-hidden rounded-lg h-64">
            <div className="relative group h-full">
              <Image
                src={webChemistry}
                alt="Project 1"
                className="w-full h-auto transition-transform duration-[10000ms] group-hover:translate-y-[-75%]"
              />
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://live-link.com/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Live Link
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
          <div className="overflow-hidden rounded-lg h-64">
            <div className="relative group h-full">
              <Image
                src={webLaptops}
                alt="Project 2"
                className="w-full h-auto transition-transform duration-[10000ms] group-hover:translate-y-[-75%]"
              />
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://live-link.com/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
