"use client";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-[#044E83] flex justify-between items-center px-6 z-50">
        <Image
          src={Logo}
          alt="Logo"
          className="w-[90px] h-28 absolute top-8"
        ></Image>
        <div className="relative left-28">
          <p className="text-[#b9d8f3] text-lg font-extrabold xl:text-2xl xl:font-bold">
            Tuition Free{" "}
            <span className="hidden xl:inline-block">Education</span> Program{" "}
            <span className="hidden xl:inline-block">
              on Latest Technologies{" "}
            </span>
          </p>
        </div>
        <ul className="hidden md:flex h-full items-center text-white md:space-x-4 lg:text-lg lg:space-x-8">
          <li>
            <Link
              href="/"
              className="hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Apply"
              className="hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              href="/Jobs"
              className="hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href="/Result"
              className="hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
            >
              Result
            </Link>
          </li>
          <li>
            <Link
              href="/Courses"
              className=" mx-5 hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
            >
              Courses
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className="md:hidden cursor-pointer"
          onClick={toggleSidebar}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>

      {isSidebarOpen && (
        <div className=" w-2/3 bg-[#044E83] fixed top-0 bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col w-full text-white text-lg justify-center items-center my-10 py-12 space-y-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#e8eaed"
              onClick={toggleSidebar}
              className="absolute top-0 left-0 mx-10 my-10"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <li>
              <Link
                href="/"
                className="hover:text-orange-500 transition-all duration-300 ease-in-out px-28 py-4 hover:bg-slate-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Apply"
                className="hover:text-orange-500 transition-all duration-300 ease-in-out px-28 py-4 hover:bg-slate-600"
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                href="/Jobs"
                className="hover:text-orange-500 transition-all duration-300 ease-in-out px-28 py-4 hover:bg-slate-600"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/Result"
                className="hover:text-orange-500 transition-all duration-300 ease-in-out px-28 py-4 hover:bg-slate-600"
              >
                Result
              </Link>
            </li>
            <li>
              <Link
                href="/Courses"
                className="hover:text-orange-500 transition-all duration-300 ease-in-out px-28 py-4 hover:bg-slate-600"
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;