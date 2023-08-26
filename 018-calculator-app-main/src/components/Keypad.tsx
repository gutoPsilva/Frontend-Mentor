import { AppContext } from "../App";
import { useContext } from "react";

export const Keypad = () => {
  const { currentTheme: tema } = useContext(AppContext);
  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];

  const themeButton = (text: string):string => {
    if(text === "DEL" || text === "RESET"){
      return `${tema["key-prim"]} ${tema["key-prim-shw"]} ${tema["t-color-sec"]} ${tema["focus-hover-key-prim"]} text-xl ${text === "RESET" ? "col-span-2" : ""}`;
  } else if(text === "="){
    return `${tema["key-sec"]} ${tema["key-sec-shw"]} ${tema["t-color-thr"] || tema["t-color-sec"]} ${tema["focus-hover-key-sec"]} text-2xl col-span-2 `;
  } else return `${tema["key-thr"]} ${tema["key-thr-shw"]} 
  ${tema["t-color-prim"]} ${tema["focus-hover-key-thr"]} text-3xl`;
  };

  return (
    <div className={`max-w-xl w-full ${tema.keypad} rounded-xl grid grid-cols-4 gap-4 p-6`}>
      {keys.map(key => {
        return <button className={`relative outline-none rounded-lg p-3 active:translate-y-1 active:shadow-transparent ${themeButton(key)}`}>{key}</button>;
      })}
    </div>
  );
};
