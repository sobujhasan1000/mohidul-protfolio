import Image from "next/image";
import myPhoto from "../../../../public/myPhoto.png";
import Link from "next/link";

const pageAbout = () => {
  return (
    <div className="py-4 bg-slate-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            width={400}
            height={400}
            src={myPhoto}
            alt="My Photo"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold  mb-4">About Me</h2>
          <h3 className="text-xl  mb-6">
            Get a website that will make a lasting impression on your audience
          </h3>
          <div className="bg-slate-400 p-6 rounded-lg shadow-md text-lg text-slate-800 mb-6">
            <div className="grid grid-cols-2">
              <div>
                <p>
                  <strong>
                    Name: <br />
                  </strong>{" "}
                  Md Mohidul Islam
                </p>
                <p>
                  <strong>
                    Phone: <br />
                  </strong>{" "}
                  (+880) 01740121418
                </p>
              </div>
              <div>
                <p>
                  <strong>
                    Email: <br />
                  </strong>{" "}
                  sobujhasan1000@gmail.com
                </p>
                <p>
                  <strong>
                    LinkedIn: <br />
                  </strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/mohidul-is"
                    className="text-blue-500"
                  >
                    Linkdin Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link href="/contractMe">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Contact Me
              </button>
            </Link>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              <a href="/MD MOHIDUL ISLAM frontend developer.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageAbout;
