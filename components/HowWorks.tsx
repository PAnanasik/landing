"use client";
import { stepsText } from "@/constants";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";

type StepCardProps = {
  title: string;
  text: string;
  id: number;
};

const StepCard = ({ title, text, id }: StepCardProps) => {
  return (
    <motion.div
      className="bg-primary bg-opacity-[0.2] w-full min-h-[200px] p-8 rounded-[20px]"
      variants={fadeIn("right", "spring", 0.35 * id, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="text-[24px] text-primary font-medium">{title}</h2>
      <p className="text-[18px]">{text}</p>
    </motion.div>
  );
};

const HowWorks = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto mt-[90px] px-[20px]">
      <motion.h2
        className="mb-[60px]"
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Как это работает?
      </motion.h2>
      <div className="flex sm:flex-row flex-col gap-[10px]">
        {stepsText.map((step, id) => (
          <StepCard key={step.title} id={id} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
