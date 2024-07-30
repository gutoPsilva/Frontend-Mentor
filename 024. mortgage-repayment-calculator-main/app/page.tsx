"use client";
import CurrencyInput from "react-currency-input-field";
import CalculatorSVG from "../assets/images/icon-calculator.svg"
import IlustrationSVG from "../assets/images/illustration-empty.svg"

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full font-jakarta bg-white md:flex-row md:w-fit md:min-h-min md:h-min md:rounded-3xl md:overflow-hidden md:mx-4">
      <article className="flex flex-col w-full p-4 mb-3 md:max-w-md md:mb-0 md:p-8">
        
        <section className="w-full flex flex-col transition items-start gap-2 md:flex-row md:items-end md:justify-between">
          <h1 className="font-bold text-2xl text-slate-900">Mortgage Calculator</h1>
          <button className="underline decoration-1 font-semibold text-slate-600  hover:text-gray-700">Clear All</button>
        </section>

        <section className="w-full h-fit flex flex-col items-start gap-2 mt-4  md:mt-8">
          <label className="text-slate-600" htmlFor="mortgage-amount">Mortgage Amount</label>
          <div className="flex w-full h-full rounded-md overflow-hidden border-slate-700  border hover:border-black">
            <div className="flex min-h-full px-5 items-center justify-center bg-slate-100">
              <span className="text-slate-700 font-extrabold">£</span>
            </div>
            <CurrencyInput
              id="mortgage-amount"
              name="mortgage-amount"
              decimalsLimit={2}
              className="p-3 flex-grow"
            />
          </div>
        </section>

        <section className="w-full md:flex md:gap-6">
          <div className="flex flex-grow flex-col items-start gap-2 mt-4">
            <label className="text-slate-600" htmlFor="mortgage-term">Mortgage Term</label>
            <div className="flex w-full h-full rounded-md overflow-hidden border-slate-700 transition border hover:border-black">
              <CurrencyInput
                id="mortgage-term"
                name="mortgage-term"
                allowDecimals={false}
                className="p-3 w-full"
              />
              <div className="flex min-h-full px-5 items-center justify-center bg-slate-100">
                <span className="text-slate-700 font-extrabold">years</span>
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-start gap-2 mt-4">
            <label className="text-slate-600" htmlFor="interest-rate">Interest Rate</label>
            <div className="flex w-full h-full rounded-md overflow-hidden border-slate-700 transition border hover:border-black">
              <CurrencyInput
                id="interest-rate"
                name="interest-rate"
                decimalsLimit={2}
                className="p-3 w-full"
              />
              <div className="flex min-h-full px-5 items-center justify-center bg-slate-100">
                <span className="text-slate-700 font-extrabold">%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col gap-2 mt-4">
          <p className="text-slate-600">Mortgage Type</p>
          <div className="w-full flex flex-col gap-2">
            <label className="flex items-center px-4 py-2 gap-4 border rounded border-slate-700 transition cursor-pointer hover:border-lime-fe-900 md:py-3">
              <input type="radio" id="type-repayment" name="mortgage-type" value="repayment" />
              <label htmlFor="type-repayment" className="text-slate-900 font-bold cursor-pointer">Repayment</label>
            </label>
            <label className="flex items-center px-4 py-2 gap-4 border rounded border-slate-700 transition cursor-pointer hover:border-lime-fe-900 md:py-3">
              <input id="type-interest" type="radio" name="mortgage-type" value="interest-only" />
              <label htmlFor="type-interest" className="text-slate-900 font-bold cursor-pointer">Interest Only</label>
            </label>
          </div>
        </section>

        <button className="text-slate-900 bg-lime-fe-900 font-bold flex gap-2 justify-center items-center mt-4 rounded-3xl p-3 transition hover:bg-lime-fe-300 md:w-fit md:px-10 md:mt-8">
          <Image src={CalculatorSVG} alt="Ilustração Calculadora" className="w-fit h-fit" />
          <span>Calculate Repayments</span>
        </button>

      </article>

      <article className="bg-slate-900 flex flex-col px-4 py-8 items-center justify-center md:max-w-md md:rounded-bl-9xl md:w-fit md:px-14">
        <Image src={IlustrationSVG} alt="Empty Ilustration"></Image>

        <h2 className="text-white font-bold text-2xl mt-2">Results shown here</h2>

        <p className="text-slate-300 text-center mt-4 md:max-w-96">
          Complete the form and click “calculate repayments” to see what your monthly repayments would be.
        </p>
      </article>
    </main>
  );
}
