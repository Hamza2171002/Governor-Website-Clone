import image1 from "../../../../public/imageWebsite.jpg";
import image2 from "../../../../public/imageWebsite2.jpg";
import image3 from "../../../../public/imageWebsite3.jpg";
import Image from "next/image";
import SlidingImages from "../Slide-image/page";
const About = () => {
  return (
    <div>
      <h1 className="text-[#044E83] font-extrabold text-2xl text-center mx-14 mb-6 xl:mt-6 xl:text-4xl">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className="mx-6 text-lg italic font-medium text-center xl:text-xl 2xl:text-2xl">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="mt-10 space-y-9 md:space-y-0 md:space-x-10 md:ml-16 md:flex place-items-center">
        <Image
          src={image1}
          alt="Website-Imaeg"
          className="w-[90%] h-[400px] object-cover shadow-2xl shadow-black rounded-xl md:w-[30%] md:h-[350px] "
        ></Image>
        <Image
          src={image2}
          alt="Website-Imaeg"
          className="w-[90%] h-[400px] object-cover shadow-2xl shadow-black rounded-xl md:w-[30%] md:h-[350px]"
        ></Image>
        <Image
          src={image3}
          alt="Website-Imaeg"
          className="w-[90%] h-[400px] object-cover shadow-2xl shadow-black rounded-xl md:w-[30%] md:h-[350px]"
        ></Image>
      </div>
      <div>
        <SlidingImages />
      </div>
    </div>
  );
};

export default About;