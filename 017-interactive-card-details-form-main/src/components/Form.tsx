import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AppContext } from "../App";

const lastData = JSON.parse(localStorage.getItem("lastData") || "{}"); // doesn't have any meaningfull use, just wanted to save the forms info

export const Form = () => {
  const { setHolderName, setCardNumber, setCardMonth, setCardYear, setCardCVC } = useContext(AppContext);
  const date = new Date();
  const currentYear = date.getFullYear() % 100; // the year module 100 returns the last 2 digits, 2023 % 100 = 23
  const currentMonth = date.getMonth() + 1; // getMonth returns 0-11, but jan is month 1 and so further...

  // let inputYear:number;
  // const minMonth = inputYear && inputYear > currentYear ? 0 : currentMonth;
  // this value might change beucase it has 2 scenarios, 1 - the year input is the current year, however the input month is lower than current month,  2 - the year input is greater than current year so the input month may be whichever month

  const schema = yup.object().shape({
    cardHolderName: yup.string().max(40).required("Can't be blank"),
    cardNumber: yup
      .string()
      .required("Can't be blank")
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Wrong format, 16 numbers only"),
    monthExp: yup.number().typeError("Can't be blank").min(currentMonth, `Min month is ${currentMonth}`).max(12, "Max month is 12").required(),
    yearExp: yup.number().typeError("Can't be blank").min(currentYear, `Min year is ${currentYear}`).max(99, "Max year is 99").required(),
    cvc: yup.string().required("Can't be blank").length(3, "Must be 3 digits").matches(/\d{3}/, "Numbers only"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: object) => {
    localStorage.setItem("lastData", JSON.stringify(data));
  };

  const styleWrong = (id: string) => {
    document.querySelector(`#${id}`)?.classList.add("border-red-error");
  };

  const clearWrongStyle = () => {
    Array.from(document.getElementsByTagName("input")).forEach(input => {
      input.classList.remove("border-red-error");
    });
  };

  clearWrongStyle(); // must be called first, so the styleWrong applies on all wrong inputs after everything is clear
  for (const key in errors) {
    if (`errors.${key}?.message`) styleWrong(key);
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="uppercase text-sm mb-1 tracking-wide" htmlFor="cardHolderName">
          Cardholder Name
        </label>
        <input className="border rounded-lg p-2 w-full styled-border mb-2" id="cardHolderName" type="text" placeholder="e.g. Jane Appleseed" maxLength={40} {...register("cardHolderName")} onChange={e => setHolderName(e.target.value)} />
        {<p className="text-red-error text-sm mb-1 break-all">{errors.cardHolderName?.message}</p>}
      </div>
      <div>
        <label htmlFor="cardNumber" className="uppercase text-sm mb-1 tracking-wide">
          Card Number
        </label>
        <input className="border rounded-lg p-2 w-full styled-border mb-2" id="cardNumber" type="text" placeholder="e.g. 1234 5678 9123 0000" maxLength={19} {...register("cardNumber")} onChange={e => setCardNumber(e.target.value)} />
        <p className="text-red-error text-sm mb-1">{errors.cardNumber?.message}</p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="w-1/2">
          <p className="uppercase text-sm mb-1 tracking-widest">
            Exp. Date (<label htmlFor="monthExp">MM</label>/<label htmlFor="yearExp">YY</label>)
          </p>
          <div className="flex gap-4">
            <input className="border rounded-lg px-3 p-2 w-1/2 styled-border mb-2" id="monthExp" type="number" placeholder="MM" {...register("monthExp")} onChange={e => setCardMonth(e.target.value)} />
            <input className="border rounded-lg px-3 p-2 w-1/2 styled-border mb-2" id="yearExp" type="number" placeholder="YY" {...register("yearExp")} onChange={e => setCardYear(e.target.value)} />
          </div>
          <p className="text-red-error text-sm mb-1">{errors.monthExp?.message || errors.yearExp?.message}</p>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="uppercase text-sm tracking-widest mb-1 w-min" htmlFor="cvc">
            CVC
          </label>
          <input className="border rounded-lg px-3 p-2 w-full styled-border mb-2" id="cvc" type="text" placeholder="e.g. 123" maxLength={3} {...register("cvc")} onChange={e => setCardCVC(e.target.value)} />
          <p className="text-red-error text-sm mb-1">{errors.cvc?.message}</p>
        </div>
      </div>

      <input className="text-white bg-very-dark-violet rounded-md p-3 cursor-pointer mb-6" value="Confirm" type="submit" />
    </form>
  );
};
