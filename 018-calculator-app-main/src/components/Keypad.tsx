import { AppContext } from "../App";
import { useContext } from "react";
import { create, all } from "mathjs";

const math = create(all);

export const Keypad = () => {
  const { currentTheme: tema, setExpression, expression } = useContext(AppContext);
  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];
  let lastChar = "";

  const evaluateExpression = (value: string, exp: string): string => {
    const ops = ["x", "/", "+", "-"];

    if(value === "="){
      if (exp && !ops.includes(lastChar)) exp = String(math.evaluate(expression.replaceAll("x", "*")));
    }

    lastChar = exp[exp.length-1];
    return exp;
  };

  const handleInput = (value: string, event?: string): void => {
    setExpression(evaluateExpression(value, expression));
  };
  
  const themeButton = (text: string): string => {
    if (text === "DEL" || text === "RESET") {
      return `${tema["key-prim"]} ${tema["key-prim-shw"]} ${tema["t-color-sec"]} ${tema["focus-hover-key-prim"]} text-2xl ${text === "RESET" ? "col-span-2" : ""}`;
    } else if (text === "=") {
      return `${tema["key-sec"]} ${tema["key-sec-shw"]} ${tema["t-color-thr"] || tema["t-color-sec"]} ${tema["focus-hover-key-sec"]} text-2xl col-span-2 `;
    } else
      return `${tema["key-thr"]} ${tema["key-thr-shw"]} 
  ${tema["t-color-prim"]} ${tema["focus-hover-key-thr"]} text-3xl`;
  };

  window.addEventListener("keyup", e => {
    console.log(e.key);
  });

  return (
    <div className={`max-w-xl w-full ${tema.keypad} rounded-md grid grid-cols-4 gap-4 p-6`}>
      {keys.map(key => {
        return (
          <button key={key} className={`relative outline-none rounded-md p-3 active:translate-y-1 active:shadow-transparent ${themeButton(key)}`} onClick={() => handleInput(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
};
