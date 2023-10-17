"use client";

import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import FaqSlider from "./FaqSlider";

const Faq = () => {
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
        Отвечаем на ваши вопросы
      </motion.h2>
      <div className="hashspan" id="howcashback"></div>
      <motion.div
        className="flex md:flex-row flex-col gap-[20px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <FaqSlider />
      </motion.div>
    </div>
  );
};

export default Faq;
