import { stepsText } from "@/constants";

type StepCardProps = {
  title: string;
  text: string;
};

const StepCard = ({ title, text }: StepCardProps) => {
  return (
    <div className="bg-primary bg-opacity-[0.2] w-full min-h-[200px] p-8 rounded-[20px]">
      <h2 className="text-[24px] text-primary font-medium">{title}</h2>
      <p className="text-[18px]">{text}</p>
    </div>
  );
};

const HowWorks = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto mt-[90px] px-[20px]">
      <h2 className="mb-[60px]" id="title">Как это работает?</h2>
      <div className="flex sm:flex-row flex-col gap-[10px]">
        {stepsText.map((step) => (
          <StepCard key={step.title} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
