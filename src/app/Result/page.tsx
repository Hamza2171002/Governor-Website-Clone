import React from 'react';
import Image from "next/image";
import Result1 from "../../../public/imageWebsite.jpg";
import Result2 from "../../../public/imageWebsite2.jpg";
import Result3 from "../../../public/imageWebsite3.jpg";
const Cards = () => {
  return (
    <div className="flex gap-9 p-9 m-9">
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={Result1}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
        
      </div>
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={Result2}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
      </div>
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={Result3}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
      </div>


      
    
      
    </div>
  )
}

export default Cards