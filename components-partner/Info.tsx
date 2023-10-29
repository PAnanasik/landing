const Info = () => {
  return (
    <section className="max-w-[1240px] w-full mx-auto px-[20px] flex items-center mt-[90px]">
      <div className="w-full flex gap-[10px] justify-between">
        <div>
          <h2 className="sm:text-[48px] text-[28px] font-medium mb-[20px]">
            Сделайте правильный выбор
          </h2>
          <div className="flex flex-col sm:gap-[10px] gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <h2 className="text-primary sm:text-[48px] text-[28px] font-bold mb-[10px]">
                79%
              </h2>
              <p className="font-medium">
                компаний в мире используют партнерские программы
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <h2 className="text-primary sm:text-[48px] text-[28px] font-bold mb-[10px]">
                20%
              </h2>
              <p className="font-medium">
                от своего годового дохода составляют партнерские программы
              </p>
            </div>
          </div>
          <a
            href="#"
            className="sm:p-4 p-2 bg-primary rounded-[8px] font-medium text-[16px] max-w-[300px] 
            w-full sm:mt-[20px] mt-[30px] flex justify-center 
            ease duration-300 hover:bg-hover hover:font-semibold"
          >
            Стать партнером
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
