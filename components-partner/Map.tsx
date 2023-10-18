"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

const Map = () => {
  return (
    <section className="w-full h-[600px]">
      <motion.h2
        className="mb-[60px] max-w-[1240px] w-full mx-auto mt-[90px] px-[20px]"
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Мы на карте
      </motion.h2>
      <div className="w-full bg-white h-full"></div>
    </section>
  );
};

export default Map;
