import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-[#0b0c10] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn border-t-cyan-300 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contractMe">Contract me</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-black">MOhidul</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/contractMe">Contract me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contractMe" className="btn">
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
