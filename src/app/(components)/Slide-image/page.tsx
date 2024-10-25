"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/slideShow1.jpg";
import image2 from "../../../../public/slideShow2.jpg";
import image3 from "../../../../public/slideShow3.jpg";
import image4 from "../../../../public/slideShow4.jpg";
import image5 from "../../../../public/slideShow5.jpg";
import image7 from "../../../../public/slideShow7.jpg";
import image8 from "../../../../public/slideShow8.jpg";

const images = [image1, image2, image3, image4, image5, image7, image8];

const SlidingImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mt-11 ml-4 md:ml-8 h-[300px] md:h-full w-[95%] rounded-lg overflow-hidden xl:max-h-[500px] md:max-h-[300px]"
      style={{ boxShadow: "0 0 20px 0.5px", border: "none" }}
    >
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-fill w-full xl:max-h-[500px] md:max-h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingImages;