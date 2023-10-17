"use client";

import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <motion.div
        className="flex md:flex-row flex-col gap-[20px]"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="sm:h-[600px] h-full w-full flex justify-center"
        >
          <SwiperSlide className="bg-primary bg-opacity-[0.2] rounded-[30px] relative sm:p-12 p-4 w-full">
            <div className="sm:h-[255px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[470px]">
                <p className="">
                  Зачем мне кэшбек, если я могу получить скидку?
                </p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <p className="">
                  Став участником программы вы по-прежнему будете получать
                  скидки и участвовать в акциях магазинов, однако еще вы можете
                  получить кэшбек после покупки. Хотите вернуть часть
                  потраченных денег или нет - решать только вам
                </p>
              </div>
            </div>
            <div className="sm:h-[255px] sm:mt-0 mt-[30px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[230px]">
                <p className="">Как получить кэшбек?</p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <p className="">
                  Совершите покупку в одном из магазинов партнеров Бонусной
                  программы. Регистрируйтесь на сайте
                  <a
                    href="https://remont-play.ru/"
                    className="text-client"
                    target="_blank"
                  >
                    {" "}
                    https://remont-play.ru/{" "}
                  </a>
                  Сканируйте QR-код с чека после покупки и проходите в закрутую
                  программу лояльности
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-primary bg-opacity-[0.2] rounded-[30px] relative sm:p-12 p-4 w-full">
            <div className="sm:h-[205px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[440px]">
                <p className="">Почему магазин платит кэшбек? Где подвох?</p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <p className="">
                  Все прозрачно, нет подводных камней. Обычно после покупки
                  магазин может выплачивать кэшбек тому, кто вам порекомендовал
                  этот магазин. Мы договорились с магазинами и отдаем 98% своего
                  кэшбека вам
                </p>
              </div>
            </div>
            <div className="sm:h-[255px] sm:mt-0 mt-[30px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[270px]">
                <p className="">Как тратить кэшбек?</p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <p>В любом магазине партнёра до 99% от общей суммы покупки</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-primary bg-opacity-[0.2] rounded-[30px] relative sm:p-12 p-4 w-full">
            <div className="sm:h-[205px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[200px]">
                <p className="">Сколько я получу?</p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <p className="">
                  Вы получаете до 15% кэшбека от каждой покупки. Уровень кэшбека
                  вы можете узнать, обратившись в магазин-партнер
                </p>
              </div>
            </div>
            <div className="sm:h-[255px] sm:mt-0 mt-[30px] h-full">
              <div className="bg-client flex w-full min-h-[40px] p-4 items-center justify-start rounded-t-[8px] rounded-r-[8px] sm:max-w-[300px]">
                <p className="">Думаю, мне стоит попробовать</p>
              </div>
              <div
                className="bg-primary flex w-full p-4 items-center rounded-t-[8px] rounded-l-[8px] sm:max-w-[500px] mt-[30px] min-h-[40px]
                sm:absolute right-[45px]"
              >
                <div className="">
                  <p>
                    Мудрое решение! Наше приложение поможет вам реализовать ваши
                    задумки намного быстрее, что даст вам повышенный доход и
                    большее количество клиентов в кратчайшие сроки
                  </p>
                  <a
                    href="#"
                    className="p-2 border-white border-solid border-[1px] 
            border-opacity-[0.5] text-white rounded-[8px] font-medium text-[14px] w-1/2
            flex justify-center  ease duration-300
            hover:bg-primary hover:bg-opacity-[0.3] mt-[10px]"
                  >
                    Попробовать
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Faq;
