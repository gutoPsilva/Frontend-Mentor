import complete from "../svgs/icon-complete.svg"

export const Complete = () => {
  return (
    <div className="flex flex-col items-center mt-20 md:w-96 lg:w-[400px] md:m-0">
      <img src={complete} alt="completed icon" className="mb-10" ></img>
      <h1 className="uppercase text-very-dark-violet text-2xl mb-3 md:mb-2">Thank you!</h1>
      <p className="text-d-grayish-violet mb-10">We've added your card details</p>
      <button className="text-white w-full bg-very-dark-violet rounded-md p-3 cursor-pointer mb-4 md:mb-0"> Continue </button>
    </div>
  );
};