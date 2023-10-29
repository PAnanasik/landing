"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

const Intro = () => {
  return (
    <div
      className="lg:h-[700px] h-full lg:mt-[90px] mt-[140px] mb-[90px] w-full max-w-[1540px] 
      px-[20px] mx-auto flex items-center justify-between"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="lg:w-1/2 w-full"
      >
        <h2 className="font-semibold ss:text-[48px] xs:text-[32px] text-[28px] sm:leading-[75px] leading-[40px]">
          Привлекайте новых клиентов и{" "}
          <span className="text-primary">зарабатывайте</span> на бонусах!
        </h2>
        <p className="mt-[25px] sm:text-[32px] text-[18px] font-medium">
          Мотивируйте покупателей и увеличивайте доход
        </p>
        <p className="mt-[15px] sm:text-[18px] text-[18px]">
          Получите быстрый доступ к клиентам и их покупкам!
        </p>
        <div className="mt-[45px] flex sm:flex-row flex-col items-center gap-[20px]">
          <a
            href="#"
            className="sm:p-4 p-2 bg-primary rounded-[8px] font-medium text-[18px] w-full 
            flex justify-center ease duration-300 hover:bg-hover hover:font-semibold"
          >
            Стать партнером
          </a>
          <a
            href="#howworks"
            className="sm:p-4 p-2 border-primary border-solid border-[1px] 
            border-opacity-[0.5] text-primary rounded-[8px] font-medium text-[18px] w-full 
            flex justify-center ease duration-300
            hover:bg-primary hover:bg-opacity-[0.3]"
          >
            Как это работает?
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-full flex items-center md:mt-[120px] mt-[20px]"
      >
        <div className="relative w-full h-full lg:block hidden">
          <Image
            className="w-full h-full intro-animation relative"
            src="/rounded-text.svg"
            alt="Relationship image"
            width={790}
            height={700}
            priority
          />
          <div className="w-[450px] h-[450px] bg-primary bg-opacity-[0.1] rounded-full absolute child flex items-center justify-center">
            <Image
              className="w-full h-full absolute object-cover rounded-full"
              src="/client.svg"
              alt="Relationship image"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
