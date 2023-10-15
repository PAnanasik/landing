import { cardsText } from "@/constants";
import Image from "next/image";

type AdvantagesCardProps = {
  image: string;
  title: string;
  text: string;
};

const AdvantageCard = ({ image, title, text }: AdvantagesCardProps) => {
  return (
    <div className="border-solid border-primary border-[1px] rounded-[30px] md:w-1/2 w-full min-h-[400px] border-opacity-[0.5]">
      <div className="p-6">
        <Image
          src={image}
          width={200}
          height={200}
          className="bg-primary w-full h-[200px] rounded-[8px] bg-opacity-[0.2]"
          alt="card image"
          priority
        />
        <div className="mt-[15px]">
          <h2 className="font-medium text-[24px]">{title}</h2>
          <p className="mt-[20px] text-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  return (
    <div className="mt-[90px] max-w-[1240px] mx-auto px-[20px]">
      <h2 id="title" className="mb-[60px]">
        Что вы получите?
      </h2>
      <div className="flex md:flex-row flex-col gap-[30px] mb-[30px]">
        {cardsText.map((card) => (
          <AdvantageCard key={card.title} {...card} />
        ))}
      </div>
      <div className="border-solid border-primary border-[1px] rounded-[30px] w-full min-h-[300px] border-opacity-[0.5]">
        <div className="p-6 flex md:flex-row flex-col gap-[30px]">
          <Image
            className="bg-primary md:w-1/2 w-full h-[250px] rounded-[8px] bg-opacity-[0.2]"
            src="/RemontPlay-logo.svg"
            width={200}
            height={200}
            alt="card image"
            priority
          />
          <div className="mt-[15px]">
            <h2 className="font-medium text-[24px]">Увеличенный чек</h2>
            <p className="mt-[20px] text-[16]px">
              Покупатель замотивирован тратить больше, чтобы получить бонусы
            </p>
            <a
              href="#"
              className="p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] w-full mt-[30px] flex justify-center"
            >
              Хочу стать партнером!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
