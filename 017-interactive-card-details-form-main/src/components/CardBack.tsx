import { useContext } from "react";
import { AppContext } from "../App";

export const CardBack = () => {
  const { cardCVC } = useContext(AppContext);
  return (
    <div className="z-10 max-w-[300px] rounded-md relative card-back">
      <img src="./images/bg-card-back.png"></img>
      <p className="absolute text-white text-xs right-[38px] bottom-[80px]">{cardCVC || '000'}</p>
    </div>
  );
};