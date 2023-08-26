export const ThemeSwitcher = () => {
  return (
    <div className="flex flex-col w-[72px] relative">
      <div className="flex justify-between px-2 text-center w-full mb-3 -mt-2">
        <label className="z-10" htmlFor="one">
          1
        </label>
        <label className="z-10" htmlFor="two">
          2
        </label>
        <label className="z-10" htmlFor="three">
          3
        </label>
      </div>
      <div className="flex justify-between items-center before:absolute before:left-0 before:w-full before:h-6 before:bg-key-desb-prim before:rounded-full">
        <div className="flex items-center">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="one" />
          <div className="indicator"></div>
        </div>
        <div className="flex items-center justify-center">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="two" />
          <div className="indicator"></div>
        </div>
        <div className="flex items-center justify-end">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="three" />
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
};
