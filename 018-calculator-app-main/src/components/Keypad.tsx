import { AppContext } from "../App";
import { useContext } from "react";

export const Keypad = () => {
  const { currentTheme: tema, setExpression, expression } = useContext(AppContext);
  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="];

  const themeButton = (text: string):string => {
    if(text === "DEL" || text === "RESET"){
      return `${tema["key-prim"]} ${tema["key-prim-shw"]} ${tema["t-color-sec"]} ${tema["focus-hover-key-prim"]} text-xl ${text === "RESET" ? "col-span-2" : ""}`;
  } else if(text === "="){
    return `${tema["key-sec"]} ${tema["key-sec-shw"]} ${tema["t-color-thr"] || tema["t-color-sec"]} ${tema["focus-hover-key-sec"]} text-2xl col-span-2 `;
  } else return `${tema["key-thr"]} ${tema["key-thr-shw"]} 
  ${tema["t-color-prim"]} ${tema["focus-hover-key-thr"]} text-3xl`;
  };

  const handleInput = (value:string):void => {
    const opers = ["/", "+", "-", "x"];
    let block = "";
    const lastChar = block[block.length - 1];
    if(value === "="){
      // input is limited to predefined buttons, so even though i got this warning that eval is dangerous, those limited buttons shouldn't be harmful
      // eslint-disable-next-line no-eval
      const answer = eval(expression);
      setExpression(String(answer));
    } else if (value === "RESET") {
      setExpression("");
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else if(value === "." && block.includes(".")){
      console.log("no more dots....");
    } else if(!opers.includes(value)) {
      block += value;
    } else {
      setExpression(expression + block);
      block = "";
    }
  };

  return (
    <div className={`max-w-xl w-full ${tema.keypad} rounded-md grid grid-cols-4 gap-4 p-6`}>
      {keys.map(key => {
        return <button key={key} className={`relative outline-none rounded-md p-3 active:translate-y-1 active:shadow-transparent ${themeButton(key)}`} onClick={() => handleInput(key)}>{key}</button>;
      })}
    </div>
  );
};
