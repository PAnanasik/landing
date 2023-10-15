"use client";

import { communityDesc, communityPluses } from "@/constants";
import Image from "next/image";
import { useState } from "react";

type CommunityCardProps = {
  labelText: string;
  id: number;
};

type CommunityDescProps = {
  id: number;
};

const Community = () => {
  const CommunityCard = ({ labelText, id }: CommunityCardProps) => {
    const [active, setActive] = useState(false);
    return (
      <div className="w-full">
        <div className="w-full h-[100px] flex items-center md:justify-center px-[20px] border-primary border-[1px] border-solid border-opacity-[0.5] rounded-[20px]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => setActive(!active)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {labelText}
            </span>
          </label>
        </div>
        {active && <CommunityDesc id={id} />}
      </div>
    );
  };

  const CommunityDesc = ({ id }: CommunityDescProps) => {
    return (
      <div className="mt-[15px] mb-[5px] left-0 border-[1px] border-solid border-primary border-opacity-[0.5] p-[10px] rounded-[20px]">
        <h2 className="text-primary text-[18px] font-medium">
          {communityDesc[id].title}
        </h2>
        <p className="text-[16px] mt-[10px]">{communityDesc[id].text}</p>
        <a
          href="#"
          className="p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] w-full mt-[15px] flex justify-center"
        >
          Хочу попробовать!
        </a>
      </div>
    );
  };

  return (
    <div className="max-w-[1240px] w-full px-[20px] mx-auto mt-[90px]">
      <div className="flex flex-row justify-between h-full items-center">
        <h2 className="font-semibold ss:text-[32px] text-[24px] leading-[50px]">
          Remont Play - это не просто программа лояльности. Это{" "}
          <span className="text-primary">
            целое коммьюнити предпринимателей
          </span>
        </h2>
        <Image
          className="rounded-[8px] bg-opacity-[0.3] md:w-[700px] w-[500px] h-[300px] md:block hidden"
          src="/community-section-right.svg"
          alt="community section image"
          width={700}
          height={350}
        />
      </div>
      <div className="mt-[60px] flex md:flex-row flex-col w-full md:gap-[10px] gap-[10px]">
        {communityPluses.map((item, id) => (
          <CommunityCard key={item.labelText} id={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Community;
