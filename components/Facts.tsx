import { factsText } from "@/constants";
import Image from "next/image";

type FactCardProps = {
  title: string;
  text: string;
};

const FactCard = ({ title, text }: FactCardProps) => {
  return (
    <div className="w-full min-h-[300px] p-6 rounded-[20px] bg-primary bg-opacity-[0.2]">
      <h2 className="md:text-[32px] text-[24px] font-medium text-primary">{title}</h2>
      <p className="mt-[20px] md:text-[24px] text-[18px]">{text}</p>
    </div>
  );
};

const Facts = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-[20px] mt-[90px]">
      <h2 id="title" className="mb-[60px]">
        А вы знали?
      </h2>
      <div className="flex sm:flex-row flex-col gap-[20px]">
        {factsText.map((fact) => (
          <FactCard key={fact.title} {...fact} />
        ))}
      </div>
      <div className="w-full min-h-[300px] p-6 rounded-[20px] bg-primary bg-opacity-[0.2] mt-[30px] flex md:flex-row flex-col justify-between gap-[30px]">
        <Image
          className="bg-primary rounded-[8px] bg-opacity-[0.3] md:w-[800px] w-full h-[300px]"
          src="/RemontPlay-logo.svg"
          alt="Remont play logo"
          width={800}
          height={350}
        />
        <div>
          <h2 className="md:text-[32px] text-[24px] font-medium text-primary">Попробуйте!</h2>
          <p className="mt-[20px] text-[16px]">
            У нас есть очень удобное приложение, с помощью которого вы сможете
            извлечь максимальную выгоду за кратчайший период
          </p>
          <a
            href="#"
            className="p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] w-full mt-[30px] flex justify-center"
          >
            Хочу попробовать!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Facts;
