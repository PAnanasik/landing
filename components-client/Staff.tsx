"use client";
import { staffArray } from "@/constants";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import Image from "next/image";

type StaffCardProps = {
  name: string;
  prof: string;
  desc: string;
  id: number;
};

const StaffCard = ({ name, prof, desc, id }: StaffCardProps) => {
  return (
    <motion.div
      className="flex flex-col w-full"
      variants={fadeIn("right", "spring", 0.05 * id, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="bg-black bg-opacity-[0.3] rounded-[20px] h-[300px] w-full relative">
        <Image
          className="bg-opacity-[0.3] absolute h-full object-cover rounded-t-[20px] z-[-10] w-full"
          src="/mnogoznaal.jpg"
          alt="community section image"
          width={700}
          height={400}
        />
        <div className="absolute bottom-[20px] left-[20px]">
          <h2 className="text-[18px] font-medium">{name}</h2>
          <p className="text-gray-200">{prof}</p>
        </div>
      </div>
      <p className="p-4 bg-primary bg-opacity-[0.2] rounded-b-[20px]">{desc}</p>
    </motion.div>
  );
};

const Staff = () => {
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
        Сотрудники
      </motion.h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {staffArray.map((staff, id) => (
          <StaffCard key={staff.name} id={id} {...staff} />
        ))}
      </div>
    </div>
  );
};

export default Staff;
