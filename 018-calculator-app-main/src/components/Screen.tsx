import { AppContext } from "../App";
import { useContext } from "react";

export const Screen = () => {
  const { currentTheme: tema, expression } = useContext(AppContext);

  return <div className={`text-4xl rounded-lg px-4 text-right py-4 ${tema.screen} ${tema["t-alt"]}`}>{expression || '0'}</div>;
};