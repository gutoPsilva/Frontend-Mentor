import { AppContext, Theme, theme1, theme2, theme3 } from "../App";
import { useContext, useState } from "react";

export const ThemeSwitcher = () => {
  const { setCurrentTheme, currentTheme: tema } = useContext(AppContext);
  const lastIndiPos = localStorage.getItem("indiPos");
  const lastRadio = Number(JSON.parse(localStorage.getItem("radioNumber")||"1")); // default is theme 1
  const [indiPos, setIndiPos] = useState(lastIndiPos ? JSON.parse(lastIndiPos) : "left-[.3rem]");

  const saveThemeOnStorage = (theme: Theme, indiPos: string, num?: number):void => {
    localStorage.setItem("prefTheme", JSON.stringify(theme));
    localStorage.setItem("indiPos", JSON.stringify(indiPos));
    localStorage.setItem("radioNumber", JSON.stringify(num));
  };

  const switchTheme = (id: number):void => {
    if (id === 1) {
      setCurrentTheme(theme1);
      setIndiPos("left-[.3rem]");
      saveThemeOnStorage(theme1, "left-[.3rem]", 1);
    } else if (id === 2) {
      setCurrentTheme(theme2);
      setIndiPos("left-[1.75rem]");
      saveThemeOnStorage(theme2, "left-[1.75rem]", 2);
    } else if (id === 3) {
      setCurrentTheme(theme3);
      setIndiPos("left-[3.3rem]");
      saveThemeOnStorage(theme3, "left-[3.3rem]", 3);
    }
  };

  const radioButtons = [1, 2, 3];

  return (
    <div className="flex flex-col w-[72px] relative">
      <div className="flex justify-between px-2 text-center w-full">
        <label className="z-10" htmlFor="1">1</label>
        <label className="z-10" htmlFor="2">2</label>
        <label className="z-10" htmlFor="3">3</label>
      </div>
      <div className={`flex justify-between ${tema.keypad} items-center w-full h-6 rounded-full`}>
        {radioButtons.map(button => {
          return (
            <div key={button} className="flex items-center">
              <input className="z-10 cursor-pointer h-[.9rem] w-[.9rem] mx-[.3rem] opacity-0" name="switchTheme" type="radio" id={""+button} onClick={() => switchTheme(button)} defaultChecked={button === lastRadio}/>
            </div>
          );
        })}
        <div className={`z-20 cursor-pointer w-[.9rem] h-[.9rem] absolute ${indiPos} rounded-full transition-[left] duration-[250ms] ease-in-out ${tema["key-sec"]} ${tema["focus-hover-key-sec"]}`}></div>
      </div>
    </div>
  );
};
