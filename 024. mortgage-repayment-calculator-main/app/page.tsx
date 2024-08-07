"use client";
import CurrencyInput from "react-currency-input-field";
import CalculatorSVG from "../assets/images/icon-calculator.svg";
import IlustrationSVG from "../assets/images/illustration-empty.svg";

import Image from 'next/image';
import { useState } from "react";

export default function Home() {

  const [mortgage, setMortgage] = useState({
    amount: "",
    mortgage_term: "",
    interest_rate: "",
    type: "",
  });

  const [repayment, setRepayment] = useState({
    monthly: 0,
    total: 0
  });

  const [errors, setErrors] = useState({
    amount: false,
    mortgage_term: false,
    interest_rate: false,
    type: false,
  });

  const handleChangeMortgage = (prop: keyof typeof mortgage, value: string | number | undefined) => {
    setMortgage((prevMortgage) => ({
      ...prevMortgage,
      [prop]: value,
    }));
  };

  const validateValues = () => {
    const { amount, mortgage_term, interest_rate, type } = mortgage;

    const newErrors = { ...errors };

    newErrors.amount = !amount;
    newErrors.mortgage_term = !mortgage_term;
    newErrors.interest_rate = !interest_rate;
    newErrors.type = !type;

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(error => error);

    return hasError;
  }

  const calculateRepayment = () => {
    const { amount, mortgage_term, interest_rate, type } = mortgage;
    let repayment = 0;

    if (validateValues()) return;

    const principal = +amount;
    const monthlyInterestRate = +interest_rate / 12 / 100;
    const numberOfPayments = +mortgage_term * 12;

    if (monthlyInterestRate > 0) {
      repayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      repayment = principal / numberOfPayments;
    }

    const totalOverTerm = repayment * numberOfPayments;

    setRepayment({
      monthly: repayment,
      total: totalOverTerm
    });
  };

  const clearAll = () => {
    setMortgage({
      amount: "",
      mortgage_term: "",
      interest_rate: "",
      type: "",
    });

    setRepayment({
      monthly: 0,
      total: 0
    });

    setErrors({
      amount: false,
      mortgage_term: false,
      interest_rate: false,
      type: false,
    });
  }

  return (

    <main className="flex flex-col min-h-screen w-full font-jakarta bg-white md:flex-row md:w-fit md:min-h-min md:h-min md:rounded-3xl md:overflow-hidden md:mx-4">

      <article className="flex flex-col w-full p-4 mb-3 md:max-w-30r md:mb-0 md:p-8">

        <section className="w-full flex flex-col transition items-start gap-2 md:flex-row md:items-end md:justify-between">
          <h1 className="font-bold text-2xl text-slate-900">Mortgage Calculator</h1>
          <button onClick={clearAll} className="underline decoration-1 font-semibold text-slate-600  hover:text-gray-700">Clear All</button>
        </section>

        <section className="w-full h-fit flex flex-col items-start gap-2 mt-4  md:mt-8">
          <label className="text-slate-600" htmlFor="mortgage-amount">Mortgage Amount</label>
          <div
            className={`flex w-full h-full rounded-md overflow-hidden transition-all border group ${errors.amount ? 'border-red-fe hover:border-red-fe' : 'border-slate-700 hover:border-lime-fe-900'}`}
          >
            <div className={`flex min-h-full px-5 items-center transition-all justify-center  ${errors.amount ? 'bg-red-fe ' : 'bg-slate-100 group-hover:bg-lime-fe-900'}`}>
              <span className={`font-extrabold transition-all ${errors.amount ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>£</span>
            </div>
            <CurrencyInput
              id="mortgage-amount"
              name="mortgage-amount"
              decimalsLimit={2}
              decimalSeparator="."
              groupSeparator=","
              value={mortgage.amount ? mortgage.amount : ''}
              className="p-3 flex-grow"
              onValueChange={(value) => handleChangeMortgage("amount", value)}
            />
          </div>

          {
            errors.amount && <p className="text-red-fe">This field is required</p>
          }

        </section>

        <section className="w-full md:flex md:gap-6">
          <div className="flex flex-grow flex-col items-start gap-2 mt-4">
            <label className="text-slate-600" htmlFor="mortgage-term">Mortgage Term</label>
            <div className={`flex w-full rounded-md overflow-hidden transition-all border group ${errors.mortgage_term ? 'border-red-fe hover:border-red-fe' : ' border-slate-700  hover:border-lime-fe-900'}`}>
              <CurrencyInput
                id="mortgage-term"
                name="mortgage-term"
                allowDecimals={false}
                decimalSeparator="."
                groupSeparator=","
                value={mortgage.mortgage_term ? mortgage.mortgage_term : ''}
                className="p-3 w-full"
                onValueChange={(value) => handleChangeMortgage("mortgage_term", value)}
              />
              <div className={`flex min-h-full px-5 items-center transition-all justify-center ${errors.mortgage_term ? 'bg-red-fe' : 'bg-slate-100 group-hover:bg-lime-fe-900'}`}>
                <span className={`font-extrabold transition-all ${errors.mortgage_term ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>years</span>
              </div>
            </div>
            {
              errors.mortgage_term && <p className="text-red-fe">This field is required</p>
            }
          </div>
          <div className="flex flex-grow flex-col items-start gap-2 mt-4">
            <label className="text-slate-600" htmlFor="interest-rate">Interest Rate</label>
            <div className={`flex w-full rounded-md overflow-hidden transition-all border group ${errors.interest_rate ? 'border-red-fe hover:border-red-fe' : 'border-slate-700  hover:border-lime-fe-900'}`}>
              <CurrencyInput
                id="interest-rate"
                name="interest-rate"
                decimalsLimit={2}
                className="p-3 w-full"
                value={mortgage.interest_rate ? mortgage.interest_rate : ''}
                decimalSeparator="."
                groupSeparator=","
                onValueChange={(value) => handleChangeMortgage("interest_rate", value)}
              />
              <div className={`flex min-h-full px-5 transition-all items-center justify-center ${errors.interest_rate ? "bg-red-fe" : 'bg-slate-100 group-hover:bg-lime-fe-900'}`}>
                <span className={`font-extrabold transition-all ${errors.interest_rate ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>%</span>
              </div>
            </div>
            {
              errors.interest_rate && <p className="text-red-fe">This field is required</p>
            }
          </div>
        </section>

        <section className="w-full flex flex-col gap-2 mt-4">
          <p className="text-slate-600">Mortgage Type</p>
          <div className="w-full flex flex-col gap-2">
            <label className={`flex items-center px-4 py-2 gap-4 border rounded transition-all cursor-pointer hover:border-lime-fe-900 md:py-3 ${mortgage.type == '1' ? 'border-lime-fe-900'  : 'border-slate-700'}`}>
              <input type="radio" id="type-repayment" name="mortgage-type" checked={mortgage.type == "1"} onChange={() => handleChangeMortgage("type", 1)} />
              <label htmlFor="type-repayment" className="text-slate-900 font-bold cursor-pointer">Repayment</label>
            </label>
            <label className={`flex items-center px-4 py-2 gap-4 border rounded transition-all cursor-pointer hover:border-lime-fe-900 md:py-3 ${mortgage.type == '2' ? 'border-lime-fe-900'  : 'border-slate-700'}`}>
              <input id="type-interest" type="radio" name="mortgage-type" checked={mortgage.type == "2"} onChange={() => handleChangeMortgage("type", 2)} />
              <label htmlFor="type-interest" className="text-slate-900 font-bold cursor-pointer">Interest Only</label>
            </label>
          </div>
          {
            errors.type && <p className="text-red-fe">This field is required</p>
          }
        </section>

        <button onClick={calculateRepayment} className="text-slate-900 bg-lime-fe-900 font-bold flex gap-2 justify-center items-center mt-4 rounded-3xl p-3 transition hover:bg-lime-fe-300 md:w-fit md:px-10 md:mt-8">
          <Image src={CalculatorSVG} alt="Ilustração Calculadora" className="w-fit h-fit" />
          <span>Calculate Repayments</span>
        </button>

      </article>

      <article className="bg-slate-900 flex flex-col px-6 py-8 items-center justify-center md:max-w-30r md:rounded-bl-9xl md:w-fit md:px-10">
        {
          repayment.monthly == 0 ?
            (
              <>
                <Image src={IlustrationSVG} alt="Empty Ilustration"></Image>

                <h2 className="text-white font-bold text-2xl mt-2">Results shown here</h2>

                <p className="text-slate-300 text-center mt-4 md:max-w-96">
                  Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                </p>
              </>
            ) :
            (
              <>
                <h2 className="text-white w-fit mr-auto font-bold text-2xl">Your results</h2>
                <p className="text-slate-300 mt-4">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                <div className="flex w-full h-fit bg-lime-fe-900 rounded-md mt-4">
                  <div className="h-full w-full bg-slate-950 rounded-md mt-1 p-4">
                    <p className="text-slate-300">Your monthly repayments</p>
                    <h3 className="text-lime-fe-900 text-4xl font-bold mt-2">£{repayment.monthly.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                    
                    <hr className="opacity-20 my-4"></hr>
                  
                    <p className="text-slate-300">Total you&apos;ll repay over the term</p>
                    <p className="text-white text-2xl">£{repayment.total.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </>
            )
        }
      </article>
    </main>
  );
}
