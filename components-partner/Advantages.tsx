"use client";
import { cardsText } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

type AdvantagesCardProps = {
  image: string;
  title: string;
  text: string;
  id: number;
};

const AdvantageCard = ({ image, title, text, id }: AdvantagesCardProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.35 * id, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="border-solid border-primary border-[1px] rounded-[30px] md:w-1/2 w-full min-h-[400px] border-opacity-[0.5]"
    >
      <div className="p-6">
        <Image
          src={image}
          width={200}
          height={200}
          className="bg-primary w-full h-[200px] rounded-[8px] bg-opacity-[0.2]"
          alt="card image"
          priority
        />
        <div className="mt-[15px]">
          <h2 className="font-medium text-[24px]">{title}</h2>
          <p className="mt-[20px] text-[16px]">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Advantages = () => {
  return (
    <div className="mt-[90px] max-w-[1240px] mx-auto px-[20px]">
      <motion.h2
        id="title"
        className="mb-[60px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Что вы получите?
      </motion.h2>
      <div className="flex md:flex-row flex-col gap-[30px] mb-[30px]">
        {cardsText.map((card, id) => (
          <AdvantageCard key={card.title} id={id} {...card} />
        ))}
      </div>
      <motion.div
        className="border-solid border-primary border-[1px] rounded-[30px] w-full min-h-[300px] border-opacity-[0.5]"
        variants={fadeIn("right", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="p-6 flex md:flex-row flex-col gap-[30px]">
          <Image
            className="bg-primary md:w-1/2 w-full h-[250px] rounded-[8px] bg-opacity-[0.2]"
            src="/RemontPlay-logo.svg"
            width={200}
            height={200}
            alt="card image"
            priority
          />
          <div className="mt-[15px]">
            <h2 className="font-medium text-[24px]">Увеличенный чек</h2>
            <p className="mt-[20px] text-[16]px">
              Покупатель замотивирован тратить больше, чтобы получить бонусы
            </p>
            <a
              href="#"
              className="p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] w-full mt-[30px] flex justify-center
              ease duration-300 hover:bg-hover hover:font-semibold"
            >
              Хочу стать партнером!
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Advantages;
