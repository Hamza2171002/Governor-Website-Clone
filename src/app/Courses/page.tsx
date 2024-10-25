
import React from 'react';
import Image from "next/image";
import CourseImage1 from "../../../public/programming_fundamentals.jpg";
import CourseImage2 from"../../../public/nextjs.jpg";
import CourseImage3 from"../../../public/earn_as_your_learn.jpg";
import CourseImage4 from"../../../public/cloudComputing.jpg";


const Courses = () => {
  return (
    <>
      <div className="bg-gray-100 h-1000">
        <h1 className="text-blue-800 text-5xl font-bold p-9">Core Courses Sequence</h1>
      </div>
      <div className="flex gap-6 pl-9">
        
        <div className=" h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={CourseImage1}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold  ">Programming</p>
          <p className="text-center text-blue-900 font-bold  ">Fundamental</p>
        </div>
        
        <div className="bg-gray-100 h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={CourseImage2}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold ">Web Using Next.js</p>
        </div>
        
        <div className="bg-gray-100 h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={CourseImage3}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold">Earn As You Learn</p>
        </div>

        <div className="bg-gray-100 h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={CourseImage4}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold ">Cloud Computing</p>
        </div>
        
      </div>
    </>
  );
}

export default Courses;