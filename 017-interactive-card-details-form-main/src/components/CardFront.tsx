export const CardFront = () => {
  return (
    <div className="z-20 max-w-[300px] relative text-white rounded-md flex flex-col p-6 pb-5 card-front h-[164px]">
      <img src="/images/card-logo.svg" className="max-w-[64px] mb-5" alt="card logo"></img>
      <p className="flex justify-between tracking-[.1em] text-justify text-xl mt-auto mb-3 font-bold">
        <span>0000</span>
        <span>0000</span>
        <span>0000</span>
        <span>0000</span>
      </p>
      <div className="flex justify-between text-xs">
        <span className="uppercase"> Jane Appleseed</span>
        <span> 00/00 </span>
      </div>
    </div>
  );
};