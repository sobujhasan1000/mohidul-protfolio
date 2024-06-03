import Image from "next/image";
import icon from "../../../public/css.webp";

const Skill = () => {
  return (
    <div className="py-12 ">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        MY WORK SKILLS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center bg-[rgb(83,40,102)] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-2 border-white text-white">
          <Image
            src={icon}
            alt="CSS Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">CSS</h2>
          <div className="w-full  rounded-full h-4 mb-2 ">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-gray-600">85%</p>
        </div>
        <div className="flex flex-col items-center bg-[rgb(83,40,102)] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-2 border-white text-white">
          <Image
            src={icon}
            alt="CSS Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">CSS</h2>
          <div className="w-full  rounded-full h-4 mb-2 ">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-gray-600">85%</p>
        </div>
        <div className="flex flex-col items-center bg-[rgb(83,40,102)] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-2 border-white text-white">
          <Image
            src={icon}
            alt="CSS Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">CSS</h2>
          <div className="w-full  rounded-full h-4 mb-2 ">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-gray-600">85%</p>
        </div>
        <div className="flex flex-col items-center bg-[rgb(67,29,71)] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-2 border-white text-white">
          <Image
            src={icon}
            alt="CSS Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">CSS</h2>
          <div className="w-full  rounded-full h-4 mb-2 ">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-gray-600">85%</p>
        </div>
        {/* Add more skill items as needed */}
      </div>
    </div>
  );
};

export default Skill;
