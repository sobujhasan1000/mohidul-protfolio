import Image from "next/image";
import img from "../../../public/Programming-amico.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-0 ">
      <div className=" text-white flex flex-col md:flex-row items-center bg-gradient-to-r from-[#0a0909] via-[rgb(42,16,58)] to-[#000000] p-10 rounded-lg shadow-md max-w-4xl lg:min-w-full">
        <div className="text-center md:text-left md:flex-1  md:mb-0  text-white ">
          <h1 className="text-xl   mb-4">Hello</h1>
          <h2 className="text-3xl font-semibold mb-4">
            I am
            <span className="text-pink-400"> Mohidul Islam </span> <br />
            MERN stack developer
          </h2>
          <p className=" mb-6">
            Passionate web developer dedicated to building seamless, <br />
            high-performance websites that enhance user experience.
          </p>
          <Link href="/about">
            <button className="btn btn-outline border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded transition duration-300">
              About Me
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:flex-1 w-full">
          <Image
            src={img}
            alt="Programming illustration"
            height={400}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
