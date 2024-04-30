import Image, { StaticImageData } from "next/image";
import MetalIcon from "@public/assets/Icons/MetalIcon";
import React, { ReactNode } from "react";

interface SideImageProps {
  title: string;
  titletext: string;
  subtext: string;
  children: ReactNode;
  photo: StaticImageData;
  sideTitle: string;
  sideDescription: string;
}

const SideImage: React.FC<SideImageProps> = ({
  children,
  title,
  titletext,
  subtext,
  photo,
  sideTitle,
  sideDescription,
}) => (
  <div className="flex flex-row w-full h-[100vh] bg-success">
    <div className="flex flex-col lg:w-1/2 w-full bg-white lg:rounded-r-[40px] rounded-r-[0px] xl:px-[90px] md:px-[50px] px-[30px]  3xl:py-[5%] py-[2%] justify-start">
      <div className="flex flex-col sm:gap-1 gap-0">
        <MetalIcon />
        <h2 className="text-text sm:text-xl text-lg font-semibold">{title}</h2>
        <h2 className="text-text sm:text-lg text-md font-semibold">
          {titletext}
        </h2>
        <p className="text-text-light sm:text-sm text-xs mt-3">{subtext}</p>
      </div>
      {children}
    </div>
    <div className="lg:flex hidden flex-col w-1/2 xl:px-[90px] md:px-[50px] px-[30px]  3xl:py-[8%] py-[5%] items-center justify-between">
      <h2 className="text-white text-xl leading-[120%] font-semibold text-center">
        {sideTitle}
      </h2>
      <Image
        src={photo}
        alt="Login Photo"
        className="3xl:w-[600px] 2xl:w-[500px] xl:w-[450px] w-[400px]"
      />
      <p className="text-white text-sm text-center w-[75%]">
        {sideDescription}
      </p>
    </div>
  </div>
);

export default SideImage;
