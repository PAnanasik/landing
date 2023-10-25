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
        <h2 className="font-semibold ss:text-[48px] xs:text-[32px] text-[28px] sm:leading-[75px] ss:leading-[60px] leading-[40px]">
          <span className="text-primary">Экономим</span> на ремонте с бонусами{" "}
          <span className="text-primary">RemontPlay</span>
        </h2>
        <p className="mt-[15px] sm:text-[24px] text-[18px]">
          Завершите ваш ремонт в срок с помощью выгодных предложений от наших
          магазинов-партнеров
        </p>
        <p className="mt-[15px] sm:text-[24px] text-[18px]">
          Получайте до 15% процентов с каждой покупки
        </p>
        <div className="mt-[45px] flex sm:flex-row flex-col items-center gap-[20px]">
          <a
            href="#"
            className="sm:p-4 p-2 bg-primary rounded-[8px] font-medium text-[18px] w-full 
            flex justify-center ease duration-300 hover:bg-hover hover:font-semibold"
          >
            Участвовать
          </a>
          <a
            href="#howcashback"
            className="sm:p-4 p-2 border-primary border-solid border-[1px] 
            border-opacity-[0.5] text-primary rounded-[8px] font-medium text-[18px] w-full 
            flex justify-center ease duration-300
            hover:bg-primary hover:bg-opacity-[0.3]"
          >
            Где получить кэшбек?
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-full w-1/2 lg:flex hidden items-center md:mt-[120px] mt-[20px]"
      >
        <Image
          className="w-full h-full"
          src="/intro-img.svg"
          alt="Relationship image"
          width={450}
          height={450}
          priority
        />
      </motion.div>
    </div>
  );
};

export default Intro;
