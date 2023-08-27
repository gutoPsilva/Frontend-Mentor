import { AppContext } from "../App";
import { useContext, useState } from "react";
import { theme1, theme2, theme3 } from "../App";

export const ThemeSwitcher = () => {
  const { setCurrentTheme, currentTheme: tema } = useContext(AppContext);
  const [indiPos, setIndiPos] = useState("left-[.3rem]");
  console.log(tema);

  const switchTheme = (id: number):void => {
    if (id === 1) {
      setCurrentTheme(theme1);
      setIndiPos("left-[.3rem]");
    } else if (id === 2) {
      setCurrentTheme(theme2);
      setIndiPos("left-[1.75rem]");
    } else if (id === 3) {
      setCurrentTheme(theme3);
      setIndiPos("left-[3.3rem]");
    }
  };

  return (
    <div className="flex flex-col w-[72px] relative">
      <div className="flex justify-between px-2 text-center w-full">
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
      <div className={`flex justify-between ${tema.keypad} items-center w-full h-6 rounded-full`}>
        <div className="flex items-center">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="one" onClick={() => switchTheme(1)} checked />
        </div>
        <div className="flex items-center justify-center">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="two" onClick={() => switchTheme(2)} />
        </div>
        <div className="flex items-center justify-end">
          <input className="z-10 cursor-pointer" name="switchTheme" type="radio" id="three" onClick={() => switchTheme(3)} />
        </div>
        <div className={`w-[.9rem] h-[.9rem] absolute ${indiPos} rounded-full transition-[left] duration-[250ms] ease-in-out ${tema["key-sec"]}`}></div>
      </div>
    </div>
  );
};
