"use client";
import CurrencyInput from "react-currency-input-field";
import CalculatorSVG from "../assets/images/icon-calculator.svg"
import IlustrationSVG from "../assets/images/illustration-empty.svg"

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full font-jakarta">
      <article className="flex flex-col w-full p-4 mb-3">
        <section className="w-full flex flex-col items-start gap-2">
          <h1 className="font-bold text-2xl text-slate-900">Mortgage Calculator</h1>
          <button className="underline decoration-1 font-semibold text-slate-600">Clear All</button>
        </section>
        <section className="w-full h-fit flex flex-col items-start gap-2 mt-4">
          <label className="text-slate-600" htmlFor="mortgage-amount">Mortgage Amount</label>
          <div className="flex w-full h-full rounded-md overflow-hidden border-slate-700 border">
            <div className="flex min-h-full flex-grow items-center justify-center bg-slate-100">
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
        <section className="w-full flex flex-col items-start gap-2 mt-4">
          <label className="text-slate-600" htmlFor="mortgage-term">Mortgage Term</label>
          <div className="flex w-full rounded-md overflow-hidden border-slate-700 border">
            <CurrencyInput
              id="mortgage-term"
              name="mortgage-term"
              allowDecimals={false}
              className="p-3 flex-grow"
            />
            <div className="flex flex-grow min-h-full items-center justify-center bg-slate-100">
              <span className="text-slate-700 font-extrabold">years</span>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-start gap-2 mt-4">
          <label className="text-slate-600" htmlFor="interest-rate">Interest Rate</label>
          <div className="flex w-full h-full rounded-md overflow-hidden border-slate-700 border">
            <CurrencyInput
              id="interest-rate"
              name="interest-rate"
              decimalsLimit={2}
              className="p-3 flex-grow"
            />
            <div className="flex min-h-full flex-grow items-center justify-center bg-slate-100">
            <span className="text-slate-700 font-extrabold">%</span>
          </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-2 mt-4">
          <p className="text-slate-600">Mortgage Type</p>
          <div className="w-full flex flex-col gap-2">
            <label className="flex items-center p-2 gap-4 border rounded border-slate-700">
              <input type="radio" id="type-repayment" name="mortgage-type" value="repayment" />
              <label htmlFor="type-repayment" className="text-slate-900 font-bold">Repayment</label>
            </label>
            <label className="flex items-center p-2 gap-4 border rounded border-slate-700">
              <input id="type-interest" type="radio" name="mortgage-type" value="interest-only" />
              <label htmlFor="type-interest" className="text-slate-900 font-bold">Interest Only</label>
            </label>
          </div>
        </section>
        <button className="text-slate-900 bg-lime-fe font-bold flex gap-2 justify-center items-center mt-4 rounded-3xl p-3">
        <Image src={CalculatorSVG} alt="Ilustração Calculadora" className="w-fit h-fit" />
        <span>Calculate Repayments</span>
        </button>

      </article>
      <article className="w-full bg-slate-900 flex flex-col px-4 py-8 items-center justify-center">
        <Image src={IlustrationSVG} alt="Empty Ilustration"></Image>

        <h2 className="text-white font-bold text-2xl mt-2">Results shown here</h2>

        <p className="text-slate-300 text-center mt-4">
          Complete the form and click “calculate repayments” to see what your monthly repayments would be.
        </p>
      </article>
    </main>
  );
}



{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}