import { useContext } from "react";
import { AppContext } from "../App";

const twoDigits = (n: string):string => {
  return parseInt(n) < 10 ? `0${parseInt(n)}` : '' + parseInt(n); // parseInt because the user may put 00000025 therefore we can avoid displaying all those 0's
};

export const CardFront = () => {
  const { holderName, cardNumber, cardMonth, cardYear } = useContext(AppContext);

  return (
    <div className="z-20 max-w-[300px] relative text-white rounded-md flex flex-col p-6 pb-5 card-front min-h-[164px]">
      <img src="/images/card-logo.svg" className="max-w-[64px] mb-5" alt="card logo"></img>
      <p className="flex justify-between tracking-[0.05em] text-justify text-xl mt-auto mb-3 font-bold">{cardNumber || "0000 0000 0000 0000"}</p>
      <div className="flex justify-between text-xs">
        <span className="uppercase mr-1 break-all">{holderName || "Jane Appleseed"}</span>
        <span>
          {cardMonth && Number(cardMonth) < 13 ? twoDigits(cardMonth) : "00"}/{cardYear && Number(cardYear) < 100 ? twoDigits(cardYear) : "00"}
        </span>
      </div>
    </div>
  );
};
