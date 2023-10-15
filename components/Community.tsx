import Image from "next/image";

const Community = () => {
  return (
    <div className="max-w-[1240px] w-full px-[20px] mx-auto mt-[90px]">
      <div className="flex flex-row justify-between h-full items-center">
        <h2 className="font-semibold ss:text-[32px] text-[28px] leading-[50px]">
          Remont Play - это не просто программа лояльности. Это{" "}
          <span className="text-primary">
            целое коммьюнити предпринимателей
          </span>
        </h2>
        <Image
          className="rounded-[8px] bg-opacity-[0.3] md:w-[700px] w-[500px] h-[300px] sm:block hidden"
          src="/community-section-right.svg"
          alt="community section image"
          width={700}
          height={350}
        />
      </div>
    </div>
  );
};

export default Community;
