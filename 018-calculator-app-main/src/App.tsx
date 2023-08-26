import { Keypad } from "./components/Keypad";
import { createContext, useState } from "react";

type Theme = {
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
};

interface IAppContext {
  currentTheme: Theme;
  setCurrentTheme(args: Theme): void;
}

export const AppContext = createContext<IAppContext>({
  currentTheme: { main: "", keypad: "", screen: "", "key-prim": "", "focus-hover-key-prim":"", "key-prim-shw": "", "key-sec": "", "focus-hover-key-sec": "", "key-sec-shw": "", "key-thr": "", "focus-hover-key-thr": "", "key-thr-shw": "", "t-color-prim": "", "t-color-sec": "", "t-color-thr": "" },
  setCurrentTheme: () => {},
});

function App() {
  const [currentTheme, setCurrentTheme] = useState({
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
    "t-color-thr": "" // only exists on theme 3
  });

  return (
    <div className="App font-league-spartan bg-main-prim min-h-screen flex flex-col gap-4 justify-center items-center p-4">
      <AppContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <Keypad />
      </AppContext.Provider>
    </div>
  );
}

export default App;
