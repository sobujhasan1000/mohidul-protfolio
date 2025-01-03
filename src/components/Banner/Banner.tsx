"use client";
import Image from "next/image";
import img from "../../../public/Programming-amico.png";
import Link from "next/link";
import IconCloud from "../ui/icon-cloud";
import { Typed } from "react-typed";
import { useEffect, useState } from "react";

const roles: string[] = [
  "MERN stack developer",
  "Next.js developer",
  "Frontend developer",
];
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Banner: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="flex flex-col items-center justify-between  mt-0 text-white ">
      <div className=" text-black flex flex-col md:flex-row items-center bg-[#1F2833] px-10 rounded-lg shadow-md max-w-4xl lg:min-w-full">
        <div className="text-center md:text-left md:flex-1  md:mb-0  text-white ">
          <h1 className="text-2xl font-bold   mb-4 text-red-400">Hi</h1>
          <h2 className="text-3xl font-semibold mb-4">
            I am
            <span className=""> Mohidul Islam </span> <br />
            {roles[index]}
          </h2>
          <p className=" mb-6">
            Passionate web developer dedicated to building seamless, <br />
            high-performance websites that enhance user experience.
          </p>
          <Link href="/about">
            <button className="btn btn-info text-white border-2 border-blue-500  hover:bg-blue-500 hover:text-white py-2 px-4 rounded transition duration-300">
              About Me
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:flex-1 w-full">
          {/* <Image
            src={img}
            alt="Programming illustration"
            height={400}
            width={400}
            className="rounded-lg"
          /> */}
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
