"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

const AnotherAdvantages = () => {
  return (
    <section className="max-w-[1240px] w-full mx-auto mt-[90px] px-[20px]">
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

      {/* {
    image: "profit.png",
    title: "Выгодные предложения",
    text: "Регулярные акции и скидки помогут по-настоящему сэкономить на ремонте",
  },
  {
    image: "help.png",
    title: "Оперативная помощь",
    text: "Будьте уверены - наша поддержка решит все ваши вопросы быстро и вовремя",
  },
  {
    image: "cashback.png",
    title: "Кэшбэк до 15%",
    text: "У наших партнёров вы сможете получить до 15%. Мы предлагаем лучшие условия в Анапе",
  },
  {
    image: "cozy.png",
    title: "Комфорт",
    text: "Партнёры проходят несколько этапов проверки, чтобы вам предлагать свои услуги",
  }, */}
      <motion.div
        className="sm:grid md:grid-cols-3 grid-cols-2 flex flex-wrap gap-[20px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            1
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">
            Выгодные предложения
          </h2>
          <p className="mt-[10px]">
            Регулярные акции и скидки помогут по-настоящему сэкономить на
            ремонте
          </p>
        </div>
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            2
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">
            Оперативная помощь
          </h2>
          <p className="mt-[10px]">
            Будьте уверены - наша поддержка решит все ваши вопросы быстро и
            вовремя
          </p>
        </div>
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            3
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">Кэшбэк до 15%</h2>
          <p className="mt-[10px]">
            У наших партнёров вы сможете получить до 15%. Мы предлагаем лучшие
            условия в Анапе
          </p>
        </div>
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            4
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">Безопасность</h2>
          <p className="mt-[10px]">
            Партнёры проходят несколько этапов проверки, чтобы вам предлагать
            свои услуги
          </p>
        </div>
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            5
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">Прозрачность</h2>
          <p className="mt-[10px]">
            Уже со второй покупки в Бонусной программе – вы получаете кэшбек и
            можете тратить его сразу на следующую покупку
          </p>
        </div>
        <div className="border-primary border-opacity-[0.5] border-solid border-[1px] rounded-[20px] w-full h-[300px] py-4 px-8">
          <h2 className="text-[48px] font-medium bg-primary bg-opacity-[0.2] rounded-[10px] max-w-[70px] text-center">
            6
          </h2>
          <h2 className="mt-[10px] text-[24px] font-medium">Высокий — сразу</h2>
          <p className="mt-[10px]">
            Никаких ограничений или уровней. Кэшбек максимален уже с первой
            покупки
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AnotherAdvantages;
