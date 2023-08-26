import { AppContext } from "../App";
import { useContext } from "react";

export const Screen = () => {
  const { currentTheme: tema } = useContext(AppContext);

  return <div className={`text-4xl rounded-lg text-white px-4 text-right py-4 ${tema.screen}`}>399,981</div>;
};