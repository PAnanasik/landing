"use client";
import { moreAdvantages } from "@/constants";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";

type MoreAdvantageCardProps = {
  title: string;
  text: string;
  id: number;
};

const MoreAdvantageCard = ({ title, text, id }: MoreAdvantageCardProps) => {
  return (
    <motion.div
      className="border-solid border-[1px] border-primary border-opacity-[0.5] rounded-[30px] p-4 w-full h-[300px]"
      variants={fadeIn("right", "spring", 0.35 * id, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="text-[24px] text-primary font-medium">{title}</h2>
      <p className="mt-[15px]">{text}</p>
    </motion.div>
  );
};

const MoreAdvantages = () => {
  return (
    <section className="max-w-[1240px] w-full mx-auto px-[20px] mt-[90px]">
      <motion.h2
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Еще больше преимуществ программы лояльности
      </motion.h2>
      <div className="flex md:flex-row flex-col gap-[10px] mt-[60px]">
        {moreAdvantages.map((advantage, id) => (
          <MoreAdvantageCard key={advantage.title} id={id} {...advantage} />
        ))}
      </div>
    </section>
  );
};

export default MoreAdvantages;
