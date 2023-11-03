"use client";
import { factsText } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

type FactCardProps = {
  title: string;
  text: string;
  id: number;
};

const FactCard = ({ title, text, id }: FactCardProps) => {
  return (
    <motion.div
      className="w-full min-h-[300px] p-6 rounded-[20px] bg-primary bg-opacity-[0.2]"
      variants={fadeIn("right", "spring", 0.35 * id, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="md:text-[32px] text-[24px] font-medium text-primary">
        {title}
      </h2>
      <p className="mt-[20px] md:text-[24px] text-[18px]">{text}</p>
    </motion.div>
  );
};

const Facts = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-[20px] mt-[90px]">
      <motion.h2
        id="title"
        className="mb-[60px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        А вы знали?
      </motion.h2>
      <div className="flex sm:flex-row flex-col gap-[20px]">
        {factsText.map((fact, id) => (
          <FactCard key={fact.title} id={id} {...fact} />
        ))}
      </div>
      <motion.div
        className="w-full min-h-[300px] p-6 rounded-[20px] 
      bg-primary bg-opacity-[0.2] mt-[30px] flex md:flex-row flex-col justify-between gap-[30px]"
        variants={fadeIn("top", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Image
          className="bg-primary rounded-[8px] bg-opacity-[0.3] md:w-[800px] w-1/2 h-[300px]"
          src="/RemontPlay-logo.svg"
          alt="Remont play logo"
          width={800}
          height={350}
        />
        <div className="w-1/2">
          <h2 className="md:text-[32px] text-[24px] font-medium text-primary">
            Попробуйте!
          </h2>
          <p className="mt-[20px] text-[16px]">
            У нас есть очень удобное приложение, с помощью которого вы сможете
            извлечь максимальную выгоду за кратчайший период
          </p>
          <a
            href="https://remont-play.ru"
            className="p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] w-full mt-[30px] flex justify-center
            ease duration-300 hover:bg-hover hover:font-semibold"
          >
            Хочу попробовать!
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Facts;
