import { moreAdvantages } from "@/constants";

type MoreAdvantageCardProps = {
  title: string;
  text: string;
};

const MoreAdvantageCard = ({ title, text }: MoreAdvantageCardProps) => {
  return (
    <div className="border-solid border-[1px] border-primary border-opacity-[0.5] rounded-[30px] p-4 w-full h-[300px]">
      <h2 className="text-[24px] text-primary font-medium">{title}</h2>
      <p className="mt-[15px]">{text}</p>
    </div>
  );
};

const MoreAdvantages = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto px-[20px] mt-[90px]">
      <h2 id="title">Еще больше преимуществ программы лояльности</h2>
      <div className="flex md:flex-row flex-col gap-[10px] mt-[60px]">
        {moreAdvantages.map((advantage) => (
          <MoreAdvantageCard key={advantage.title} {...advantage} />
        ))}
      </div>
    </div>
  );
};

export default MoreAdvantages;
