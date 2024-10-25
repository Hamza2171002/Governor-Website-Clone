import courses1 from "../../../../public/AI.jpg";
import courses2 from "../../../../public/metaverse.jpg";
import courses3 from "../../../../public/cloudComputing.jpg";
import courses4 from "../../../../public//iot.jpg";
import courses5 from "../../../../public/genomics.jpg";
import courses6 from "../../../../public/automation.jpg"
import Image from "next/image";

const Advance_corses = () => {
  return (
    <div className=" my-40 space-y-40 md:space-y-16">
      <h1 className="border-t-[1px] border-black my-6 mx-6 py-10 font-extrabold text-4xl text-center text-[#044E83] ">
        Advanced Courses
      </h1>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses1}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-amber-900 py-2">
            Artificial Inteligence
          </p>
        </div>
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses2}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-amber-900 py-2">
            Web 3 and Metaverse
          </p>
        </div>
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses3}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-amber-900 py-2">
            Cloud Native Computing
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses4}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-amber-900 py-2">
            Ambiant Computing and (IOT)
          </p>
        </div>
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses5}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-amber-900 py-2">
            Genomics and Bioinformatics
          </p>
        </div>
        <div className="border-2 shadow-2xl shadow-black w-[90%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={courses6}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-lg py-2 text-amber-900 ">
            Network Programmability and Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advance_corses;