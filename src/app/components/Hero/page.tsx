import Image from "next/image";
import governor_house_image from "../../../../public/images.jpg";
import Kamran_Tessori from "../../../../public/cover.png";
const Hero = () => {
  return (
    <div className="xl:flex overflow-hidden">
      <Image
        src={governor_house_image}
        alt="Governor-House-Image"
        priority
        className="hidden xl:block w-[100%] h-[90%] object-fill absolute opacity-20 "
      ></Image>
      <div className="w-full relative top-14 left-3 sm:left-7 font-extrabold text-sky-900">
        <h1 className="text-6xl ">Governor Sindh</h1>
        <h2 className="text-[45px] font-serif  ">Kamran Khan Tessori</h2>
        <p className="text-sky-400 text-4xl">
          Certified Cloud <br />
          Applied Generative AI <br /> Engineer (GenEng)
        </p>
        <p className="text-2xl py-2">Earn up to $5,000 / month</p>
        <p className="text-2xl py-2 w-96">
          Now admissions are open in Karachi
        </p>
        <div className="sm:flex sm:space-x-10 py-4 space-y-4 sm:space-y-0">
          <button className="border-2 px-32 sm:px-11 py-4 rounded-3xl text-white bg-sky-900 sm:rounded-lg hover:translate-y-2 transform transition-all duration-300 text-sm sm:text-lg">
            APPLY NOW
          </button>
          
        </div>
      </div>
      <div className="my-20 xl:my-3">
        <Image
          src={Kamran_Tessori}
          alt="Governor-Kamran-Tessori"
        priority
          className="w-[100%] h-full xl:h-[500px] xl:w-[1500px] 2xl:w-full 2xl:h-full relative lg:ml-36"
        ></Image>
      </div>
    </div>
    
  );
};

export default Hero;