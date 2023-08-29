import { AppContext } from "../App";
import { useContext, useEffect } from "react";
import { evaluate } from "mathjs";

let block = "";
let lastChar = "";

export const Keypad = () => {
  const { currentTheme: tema, setExpression, expression } = useContext(AppContext);
  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // process the data & receive inputs
  const evaluateExpression = (value: string, exp: string): string => {
    // in case of unexpected results
    if (exp === "NaN" || exp === "Infinity" || exp === "-Infinity" || exp === "Error") return (exp = "");

    // mul & div must only be possible if there's a number on the left
    if ((value === "x" || value === "/") && nums.includes(lastChar)) {
      exp += value;
      block = "";
    } else if (value === "RESET") {
      exp = "";
      block = "";
    } else if (value === "DEL") {
      // pick everything except the last char, same as deleting the last char
      exp = exp.slice(0, -1);
      block = block.slice(0, -1);
    } else if ((value === "." && !block.includes(".")) || nums.includes(value)) {
      // if it's a ., there MUSTN'T be another . on that block to add it OR if it's a number, just add it
      exp += value;
      block += value;
    } else if (value === "-" || value === "+") {
      // + & - can be anywhere, since the evaluation only happens when the lastChar is a number, so there should have cases like -+--5, that equals -5!
      exp += value;
      block = "";
    } else if (value === "=" && nums.includes(lastChar)) {
      // the only thing necessary to try evaluation is that the lastChar is a number, based on all the case scenarios i imaginated there isn't a way to build a wrong math expression, but even if the user manages to do so, it'll just show a Error on the calc screen!
      try {
        exp = String(evaluate(exp.replaceAll("x", "*")));
        block = exp;
        localStorage.setItem("lastExp", JSON.stringify(exp));
      } catch (error) {
        exp = "Error";
        block = "";
      }
    }

    lastChar = exp[exp.length - 1];
    return exp;
  };

  const handleInput = (value: string): void => {
    setExpression(evaluateExpression(value, expression));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKey = (e: KeyboardEvent) => {
    if (keys.includes(e.key)) handleInput(e.key);
    else if (e.key === "Enter") handleInput("=");
    else if (e.key === "r") handleInput("RESET");
    else if (e.key === "Backspace" || e.key === "Delete") handleInput("DEL");
    else if (e.key === ":") handleInput("/");
    else if (e.key === "*") handleInput("x");
    else if (e.key === "h") {
      // help for shortcuts
      alert("Shortcuts for Keyboard:\nR --> Reset\nBackspace or Delete --> delete\n* or x --> multiply\n/ or : --> division\n Enter or = --> =\n Key arrows (left & right) --> switch themes");
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [handleKey]);

  // style teh buttons based on their text
  const themeButton = (text: string): string => {
    if (text === "DEL" || text === "RESET") {
      return `${tema["key-prim"]} ${tema["key-prim-shw"]} ${tema["t-color-sec"]} ${tema["focus-hover-key-prim"]} text-2xl ${text === "RESET" ? "col-span-2" : ""}`;
    } else if (text === "=") {
      return `${tema["key-sec"]} ${tema["key-sec-shw"]} ${tema["t-color-thr"] || tema["t-color-sec"]} ${tema["focus-hover-key-sec"]} text-2xl col-span-2 `;
    } else
      return `${tema["key-thr"]} ${tema["key-thr-shw"]} 
  ${tema["t-color-prim"]} ${tema["focus-hover-key-thr"]} text-3xl`;
  };

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
