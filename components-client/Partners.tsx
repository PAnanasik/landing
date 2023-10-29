"use client";
import { Slider } from "./Slider";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

const Partners = () => {
  return (
    <motion.section
      className="max-w-[1240px] w-full mx-auto px-[20px] flex flex-col mt-[90px]"
      variants={fadeIn("right", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2
        className="mb-[10px]"
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Партнеры
      </motion.h2>
      <motion.p
        className="mb-[60px] font-medium"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Мы выбрали <span className="text-primary">лучшие</span> магазины для вас
      </motion.p>
      <Slider />
    </motion.section>
  );
};

export default Partners;
