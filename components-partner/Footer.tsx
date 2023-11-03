const Footer = () => {
  return (
    <div className="w-full bg-dark sm:h-[200px] h-full mt-[90px] px-[20px] py-[30px]">
      <div
        className="w-full h-full
      flex sm:flex-row flex-col items-center justify-center sm:text-left text-center gap-[20px] sm:justify-between max-w-[1240px] mx-auto px-[20px] sm:items-center"
      >
        <div className="flex flex-col h-full">
          <h2 className="text-[32px]">RemontPlay</h2>
          <a href="https://remont-play.netlify.app/client-offer.pdf" target="_blank">
            Оферта
          </a>
          <a href="https://remont-play.ru/" target="_blank">
            Приложение
          </a>
          <p className="mt-[20px]">Images by storyset. Freepik</p>
        </div>
        <div className="h-full">
          <h2 className="text-[24px]">Контакты</h2>
          <p>+7 928 883 77 83</p>
        </div>
        <div className="h-full">
          <h2 className="text-[24px]">Адрес</h2>
          <p className="max-w-[250px]">
            Анапа, Анапское шоссе, 1Г Салон дверей ESTET
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
