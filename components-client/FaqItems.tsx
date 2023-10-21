"use client";

import { clientFaq } from "@/constants";
import Image from "next/image";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="border-primary  border-solid border-t-[1px] border-opacity-[0.2]">
      <div className="h-[100px]">
        <div className="w-full h-full flex justify-between items-center">
          <h2 className="xs:text-[24px] text-[18px] font-medium">{question}</h2>
          <Image
            className={`${
              active ? "arrow-onclick" : ""
            } object-fit cursor-pointer bg-primary bg-opacity-[0.2] w-[40px] h-[40px] 
            p-3 rounded-full flex justify-center items-center`}
            src="/btn_arrow.svg"
            alt="arrow icon"
            width={30}
            height={30}
            priority
            onClick={handleClick}
          />
        </div>
      </div>
      {active && (
        <div className="h-full mb-[30px] max-w-[600px] text-animation text-[18px]">
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      )}
    </div>
  );
};

const FaqItems = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto px-[20px] h-full ">
      {clientFaq.map((faq) => (
        <FaqItem key={faq.question} {...faq} />
      ))}
    </div>
  );
};

export default FaqItems;
