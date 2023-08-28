import { AppContext } from "../App";
import { useContext } from "react";

export const Screen = () => {
  const { currentTheme: tema, expression } = useContext(AppContext);

  return (
    <div className={`text-4xl rounded-md px-4 text-right py-4 ${tema.screen} ${tema["t-alt"]} overflow-y-hidden overflow-x-auto`}>{expression || 0}
    </div>
  );
};