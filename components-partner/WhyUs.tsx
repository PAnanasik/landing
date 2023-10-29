"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="mt-[90px] max-w-[1240px] mx-auto px-[20px]">
      <motion.h2
        id="title"
        className="mb-[15px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Почему выбирают нас?
      </motion.h2>
      <motion.div
        className="w-full mt-[60px] flex md:flex-row flex-col-reverse justify-between gap-[20px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="md:w-1/2 w-full">
          <h2 id="title" className="mb-[15px]">
            Эксклюзивность. Отсутствие Демпинга
          </h2>
          <p>
            Ограниченное количество мест. Только один магазин может представлять
            свою категорию товаров. Поэтому сотрудничая с нами у вас не будет
            конкурентов
          </p>
        </div>
        <Image
          className="bg-primary rounded-[8px] bg-opacity-[0.15] md:w-1/2 w-full h-[350px] xs:object-contain object-cover"
          src="/exclusive.svg"
          alt="Exclusive img"
          width={800}
          height={350}
        />
      </motion.div>
      <motion.div
        className="w-full mt-[60px] flex md:flex-row flex-col justify-between gap-[20px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Image
          className="bg-primary rounded-[8px] bg-opacity-[0.15] md:w-1/2 w-full h-[350px] object-cover"
          src="/designers.svg"
          alt="Designers img"
          width={800}
          height={350}
        />
        <div className="md:w-1/2 w-full">
          <h2 id="title" className="mb-[15px]">
            Сотрудничество с дизайнерами интерьера
          </h2>
          <p>
            В нашей программе вы познакомитесь с новыми дизайнерами. Клиент от
            дизайнера получит выгоду от покупки, тем самым будет дополнительно
            замотивирован к покупкам внутри Партнерской программы
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
