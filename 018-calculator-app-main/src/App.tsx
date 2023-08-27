import { Keypad } from "./components/Keypad";
import { Screen } from "./components/Screen";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { createContext, useState } from "react";

export type Theme = {
  main: string;
  keypad: string;
  screen: string;
  "key-prim": string;
  "focus-hover-key-prim": string;
  "key-prim-shw": string;
  "key-sec": string;
  "focus-hover-key-sec": string;
  "key-sec-shw": string;
  "key-thr": string;
  "focus-hover-key-thr": string;
  "key-thr-shw": string;
  "t-color-prim": string;
  "t-color-sec": string;
  "t-color-thr": string;
  "t-alt": string;
};

interface IAppContext {
  currentTheme: Theme;
  setCurrentTheme(args: Theme): void;
  expression: string,
  setExpression(args:string): void;
}

export const AppContext = createContext<IAppContext>({
  currentTheme: { main: "", keypad: "", screen: "", "key-prim": "", "focus-hover-key-prim":"", "key-prim-shw": "", "key-sec": "", "focus-hover-key-sec": "", "key-sec-shw": "", "key-thr": "", "focus-hover-key-thr": "", "key-thr-shw": "", "t-color-prim": "", "t-color-sec": "", "t-color-thr": "", "t-alt": "" },
  setCurrentTheme: () => {},
  expression: "",
  setExpression: () => {},
});

export const theme1 = {
  main: "bg-main-prim",
  keypad: "bg-keypad-prim",
  screen: "bg-screen-prim",
  "key-prim": "bg-key-desb-prim",
  "focus-hover-key-prim": "hover:bg-lighter-desb-prim focus:bg-lighter-desb-prim",
  "key-prim-shw": "shadow-desbPrim",
  "key-sec": "bg-key-red-prim",
  "focus-hover-key-sec": "hover:bg-lighter-dark-red focus:bg-lighter-dark-red",
  "key-sec-shw": "shadow-darkRed",
  "key-thr": "bg-key-light-orange",
  "focus-hover-key-thr": "hover:bg-white focus:bg-white",
  "key-thr-shw": "shadow-lightOrange",
  "t-color-prim": "text-very-dark-gb-prim",
  "t-color-sec": "text-white",
  "t-color-thr": "", // only exists on theme 3
  "t-alt": "text-white",
};
export const theme2 = {
    main: "bg-main-sec",
    keypad: "bg-keypad-sec",
    screen: "bg-screen-sec",
    "key-prim": "bg-key-cyan-sec",
    "focus-hover-key-prim": "hover:bg-lighter-cyan-sec focus:bg-lighter-cyan-sec",
    "key-prim-shw": "shadow-cyanSec",
    "key-sec": "bg-key-orange-sec",
    "focus-hover-key-sec": "hover:bg-lighter-orange-sec focus:bg-lighter-orange-sec",
    "key-sec-shw": "shadow-darkOrange",
    "key-thr": "bg-key-gray-y-sec",
    "focus-hover-key-thr": "hover:bg-white focus:bg-white",
    "key-thr-shw": "shadow-grayOrange",
    "t-color-prim": "text-very-dark-gy-sec",
    "t-color-sec": "text-white",
    "t-color-thr": "", // only exists on theme 3
    "t-alt": "text-very-dark-gy-sec",
};

export const theme3 = {
  main: "bg-main-thr",
  keypad: "bg-keypad-screen-thr",
  screen: "bg-keypad-screen-thr",
  "key-prim": "bg-key-violet-thr",
  "focus-hover-key-prim": "hover:bg-lighter-violet-thr focus:bg-lighter-violet-thr",
  "key-prim-shw": "shadow-vividMagenta",
  "key-sec": "bg-key-pure-cyan-thr",
  "focus-hover-key-sec": "hover:bg-lighter-pure-cyan-thr focus:bg-lighter-pure-cyan-thr",
  "key-sec-shw": "shadow-softCyan",
  "key-thr": "bg-key-very-dv-thr",
  "focus-hover-key-thr": "hover:bg-lighter-very-dv-thr focus:bg-lighter-very-dv-thr",
  "key-thr-shw": "shadow-darkMagenta",
  "t-color-prim": "text-light-yellow",
  "t-color-sec": "text-white",
  "t-color-thr": "text-very-dark-blue", // only exists on theme 3
  "t-alt": "text-light-yellow",
};

function App() {
  const lastTheme = localStorage.getItem("prefTheme");
  const [currentTheme, setCurrentTheme] = useState(lastTheme ? JSON.parse(lastTheme) : theme1);
  const [expression, setExpression] = useState('');

  return (
    <div className={`App font-league-spartan ${currentTheme.main} min-h-screen flex flex-col justify-center items-center p-4 gap-4`}>
      <AppContext.Provider value={{ currentTheme, setCurrentTheme, expression, setExpression }}>
        <header className={`max-w-lg w-full flex justify-between ${currentTheme["t-alt"]}`}>
          <span className="text-4xl self-end">calc</span>
          <div className="text-sm flex gap-4">
            <span className="uppercase self-end">theme</span>
            <ThemeSwitcher />
          </div>
        </header>
        <main className="max-w-lg w-full flex flex-col gap-6">
          <Screen />
          <Keypad />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
