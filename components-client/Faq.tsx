"use client";

import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import FaqSlider from "./FaqSlider";
import { useEffect, useState } from "react";
import FaqItems from "./FaqItems";

const Faq = () => {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);
  return (
    <section>
      <motion.h2
        className="mb-[60px] max-w-[1240px] w-full mx-auto mt-[90px] px-[20px]"
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

        <FaqItems />
        {/* <FaqSlider /> */}
      </motion.div>
    </section>
  );
};

export default Faq;
