"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import Script from "next/script";

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
      <div className="w-full h-[600px]" id="mymap">
        <Script
          type="text/javascript"
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adf0279fbe7f81cff691291207df7d554b3e65daa48b6459655ec8899679b7d9f&amp;width=100%25&amp;height=600&amp;id=mymap&amp;lang=ru_RU&amp;scroll=true"
        ></Script>
      </div>
    </section>
  );
};

export default Map;
