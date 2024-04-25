
import LoginPhoto from "@public/assets/analytics-on-computer-screen.png";
import Image from "next/image";
import MetalIcon from "@public/assets/Icons/MetalIcon";
import React, { ReactNode } from 'react';

interface SideImageProps {
    title:string;
    titletext: string;
    subtext: string;
    children: ReactNode;

  
  }
  
  const SideImage: React.FC<SideImageProps> = ({
     children ,
     title,
    titletext,
    subtext,
   
   
  }) => (
    <div className="flex flex-row w-full h-[100vh] bg-success">
    <div className="flex flex-col w-1/2 bg-white rounded-r-[40px] p-[90px] justify-between">
      <div className="flex flex-col gap-1">
      <MetalIcon />
        <h2 className="text-text text-xl font-semibold">{title}</h2>
        <h2 className="text-text text-lg font-semibold">
          {titletext}
        </h2>
        <p className="text-text-light text-sm mt-3">
            {subtext}
        </p>
      </div>

      {children}
    </div>
   

    <div className="flex flex-col w-1/2 p-[90px] items-center justify-between">
      <h2 className="text-white text-xl leading-[120%] font-semibold text-center">
        The simplest way to
        <br /> manage your workspace.
      </h2>
      <Image
        src={LoginPhoto}
        alt="Login Photo"
        className="w-[80%] ml-[18%]"
      />
      <p className="text-white text-sm text-center w-[75%]">
        Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem
        IpsumLoorem IpsumLoorem Ipsum
      </p>
    </div>
  </div>


  )
  
export default  SideImage




         