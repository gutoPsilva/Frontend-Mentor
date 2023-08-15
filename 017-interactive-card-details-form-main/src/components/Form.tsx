import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    cardHolderName: yup.string().required(),
    cardNumber: yup
      .string()
      .matches(/^\d{4}(?:\s?\d{4}){3}$/)
      .required(),
    monthExp: yup.number().min(1).max(12).required(),
    yearExp: yup.number().min(23).max(99).required(), // min year must be 2023, but i'm not considering the past months of this year for expiration date since there isn't a error msg for that.
    cvc: yup.string().length(3).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="uppercase text-sm mb-1 tracking-wide" htmlFor="holderName">
          Cardholder Name
        </label>
        <input className="border rounded-lg p-2 mb-5 w-full styled-border" id="holderName" type="text" placeholder="e.g. Jane Appleseed" {...register("cardHolderName")} />
      </div>
      <div>
        <label htmlFor="cardNumber" className="uppercase text-sm mb-1 tracking-wide">
          Card Number
        </label>
        <input className="border rounded-lg p-2 mb-5 w-full styled-border" id="cardNumber" type="text" placeholder="e.g. 1234 5678 9123 0000" {...register("cardNumber")} />
      </div>

      <div className="flex gap-4 mb-6">
        <div className="w-1/2">
          <p className="uppercase text-sm mb-1 tracking-widest">Exp. Date (MM/YY)</p>
          <div className="flex gap-4">
            <input className="border rounded-lg px-3 p-2 w-1/2 styled-border" id="mExp" type="number" placeholder="MM" {...register("monthExp")} />
            <input className="border rounded-lg px-3 p-2 w-1/2 styled-border" type="number" placeholder="YY" {...register("yearExp")} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="uppercase text-sm tracking-widest mb-1 w-min" htmlFor="cvc">
            CVC
          </label>
          <input className="border rounded-lg px-3 p-2 w-full styled-border" id="cvc" type="text" placeholder="e.g. 123" />
        </div>
      </div>

      <input className="text-white bg-very-dark-violet rounded-md p-3 cursor-pointer mb-6" value="Confirm" type="submit" />
    </form>
  );
};