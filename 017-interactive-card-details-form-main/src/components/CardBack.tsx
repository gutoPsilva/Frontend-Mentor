import { useContext } from "react";
import { AppContext } from "../App";

export const CardBack = () => {
  const { cardCVC } = useContext(AppContext);
  return (
    <div className="z-20 w-[300px] rounded-md relative card-back lg:w-[375px]">
      <img src="./images/bg-card-back.png" alt="back card background"></img>
      <p className="absolute text-white text-xs right-[38px] bottom-[80px] lg:text-base lg:right-[42px] lg:bottom-[97px]">{cardCVC || "000"}</p>
    </div>
  );
};