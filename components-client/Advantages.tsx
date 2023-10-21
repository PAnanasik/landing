"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import { clientAdvantages } from "@/constants";
import Image from "next/image";

type ClientAdvCardProps = {
  id: number;
  title: string;
  text: string;
  image: string;
};

const ClientAdvCard = ({ title, text, image, id }: ClientAdvCardProps) => {
  return (
    <motion.div
      className="xl:w-[280px] w-full h-[300px] rounded-[20px] bg-primary text-white bg-opacity-[0.2] relative
      hover:bg-primary ease-linear duration-150"
      variants={fadeIn("left", "spring", 0.25 * id, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className="bg-primary p-2 rounded-full w-[50px] h-[50px] absolute sm:left-[7px] left-[10px] top-[10px] bg-opacity-[0.3]
      flex justify-center items-center ease duration-300 hover:bg-primary"
      >
        <Image
          className="object-fit"
          src={`/${image}`}
          alt="profit icon"
          width={30}
          height={30}
          priority
        />
      </div>
      <div className="absolute left-[7px] bottom-[10px] sm:p-1 p-2">
        <h2 className="text-[18px] font-medium mb-[5px]">{title}</h2>
        <p className="text-[14px]">{text}</p>
      </div>
    </motion.div>
  );
};

const Advantages = () => {
  return (
    <section className="max-w-[1240px] w-full mx-auto mt-[90px] px-[20px] h-full">
      <motion.h2
        className="mb-[60px]"
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Что вы получите?
      </motion.h2>
      <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-[20px] h-full">
        <motion.div
          className="w-full xl:h-full h-[300px] rounded-[20px] bg-opacity-[0.8] relative xl:mb-0 mb-[20px]"
          variants={fadeIn("right", "spring", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Image
            className="object-cover absolute w-full h-full rounded-[20px] z-[-1]"
            src="/work-best.png"
            alt="work image"
            width={500}
            height={600}
            priority
          />
          <div className="sm:absolute sm:left-[30px] sm:bottom-[30px] flex items-center justify-center sm:h-auto h-full">
            <h2 className="sm:text-[48px] text-[32px] font-medium sm:text-left text-center z-9">
              С нами работают <span className="text-primary">лучшие</span>
            </h2>
          </div>
        </motion.div>
        <div
          className="w-full sm:grid sm:grid-cols-2 gap-[20px] [&>*:nth-child(1)]:border-primary 
          [&>*:nth-child(1)]:border-solid [&>*:nth-child(1)]:border-[1px] [&>*:nth-child(1)]:border-opacity-[0.5]
          [&>*:nth-child(4)]:border-primary [&>*:nth-child(4)]:border-solid [&>*:nth-child(4)]:border-[1px] 
          [&>*:nth-child(4)]:border-opacity-[0.5]
          [&>*:nth-child(1)]:bg-opacity-[0.1] [&>*:nth-child(4)]:bg-opacity-[0.1]
          flex flex-col"
        >
          {clientAdvantages.map((advantage, id) => (
            <ClientAdvCard key={advantage.title} id={id} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
