const RunningString = () => {
  return (
    <div
      className="w-full h-[100px] border-primary border-y-[1px] border-solid bg-primary bg-opacity-[0.3] flex items-center relative"
      id="marquee-container"
    >
      <p
        className="font-medium text-[32px] absolute text-primary"
        id="marquee-line"
      >
        ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ
        ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ
        ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ ЭКОНОМИМ ВМЕСТЕ
      </p>
    </div>
  );
};

export default RunningString;
