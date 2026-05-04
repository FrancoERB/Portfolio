export const CustomFooter = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="flex w-full py-6 items-center justify-center">
      <p className="dark:text-primary text-dark text-xl">
        © {currentDate} Hecho con ❤️ por Franco Erben
      </p>
    </div>
  );
};
