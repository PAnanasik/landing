const notFound = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col text-center px-[10px] leading-[50px]">
      <code className="text-[48px] font-semibold uppercase">error 404</code>
      <h2 className="text-[32px] font-medium">Упс... что-то пошло не так</h2>
      <p className="text-[18px]">
        сделаем вид, что ничего не произошло и вернемся на главную страницу
      </p>
      <a
        href="/"
        className="border-primary border-solid border-[1px] 
         border-opacity-[0.5] text-primary rounded-[8px] font-medium text-[18px] w-full 
         flex justify-center ease duration-300
         hover:bg-primary hover:bg-opacity-[0.3] mt-[60px] max-w-[500px]"
      >
        Вернуться назад
      </a>
    </div>
  );
};

export default notFound;
