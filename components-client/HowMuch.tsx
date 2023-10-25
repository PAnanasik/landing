"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import { useEffect, useRef, useState } from "react";

const HowMuch = () => {
  const [render, setRender] = useState(0);
  const rangeCashback = useRef<HTMLInputElement | null>(null);
  const valueBlockCashback = useRef<HTMLDivElement | null>(null);
  const rangeCash = useRef<HTMLInputElement | null>(null);
  const valueBlockCash = useRef<HTMLDivElement | null>(null);
  const valueBlockEconomy = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function calculateBg(this: any) {
      var value: number =
        ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, #A8375B 0%, #A8375B " +
        value +
        "%, #a8375b4d " +
        value +
        "%, #a8375b4d 100%)";
    }
    if (typeof document !== null) {
      document.getElementById("range-inp")!.oninput = calculateBg;
    }
    if (typeof document !== null) {
      document.getElementById("range-inp-cash")!.oninput = calculateBg;
    }
    valueBlockEconomy.current!.innerHTML = `${Math.floor(
      parseInt(valueBlockCash.current!.innerHTML) *
        (parseInt(valueBlockCashback.current!.innerHTML) * 0.01)
    ).toLocaleString()}Р`;
  }, [render]);

  function handleChangeCashback() {
    setRender(parseInt(rangeCashback.current!.value));
    if (parseInt(rangeCashback.current!.value) != 0) {
      valueBlockCashback.current!.innerHTML = `${
        rangeCashback.current!.value
      } %`;
    } else {
      valueBlockCashback.current!.innerHTML = "5 %";
    }
  }

  function handleChangeCash() {
    setRender(parseInt(rangeCash.current!.value));
    if (parseInt(rangeCash.current!.value) != 0) {
      valueBlockCash.current!.innerHTML = `${
        parseInt(rangeCash.current!.value) * 1000
      } р`;
    } else {
      valueBlockCash.current!.innerHTML = "5000";
    }
  }

  return (
    <section className="max-w-[1240px] w-full mx-auto mt-[90px] px-[20px] h-full">
      <motion.h2
        className="mb-[60px]"
        id="title"
        variants={fadeIn("right", "spring", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Сколько вы сэкономите
      </motion.h2>
      <div className="w-full h-[400px] flex justify-between items-center gap-[20px]">
        <div className="w-full bg-primary bg-opacity-[0.2] p-6 h-full rounded-[20px] ">
          <div className="flex flex-col">
            <p className="mb-[2px]">Выберите кэшбек</p>
            <div>
              <div
                className="h-[40px] bg-primary bg-opacity-[0.4] rounded-[8px] p-4 flex items-center relative"
                ref={(node) => (valueBlockCashback.current = node)}
              >
                15%
              </div>
              <input
                type="range"
                id="range-inp"
                className="transparent h-[1px] w-full cursor-pointer
              appearance-none border-transparent bg-primary bg-opacity-[0.4]"
                defaultValue={"15"}
                min="5"
                max="15"
                ref={rangeCashback}
                onChange={handleChangeCashback}
              />
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <p className="mb-[2px]">Стоимость</p>
            <div>
              <div
                className="h-[40px] bg-primary bg-opacity-[0.4] rounded-[8px] p-4 flex items-center relative"
                ref={valueBlockCash}
              >
                500000р
              </div>
              <input
                type="range"
                id="range-inp-cash"
                className="transparent h-[1px] w-full cursor-pointer
              appearance-none border-transparent bg-primary bg-opacity-[0.4]"
                defaultValue={"500"}
                min="5"
                max="1000"
                ref={rangeCash}
                onChange={handleChangeCash}
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <p>Ваша примерная экономия</p>
            <h2
              ref={valueBlockEconomy}
              className="text-[32px] font-semibold"
            ></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMuch;
