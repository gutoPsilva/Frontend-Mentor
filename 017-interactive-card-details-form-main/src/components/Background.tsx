import { CardFront } from "./CardFront";

export const Background = () => {
  return (
    <div className="relative">
      {/* <picture>
        <source media="(min-width: 640px)" srcSet="images/bg-main-desktop.png"></source>
        <img className="w-full sm:w-min" src="/images\bg-main-mobile.png" alt="background"></img>
      </picture> */}

      
      <div className="absolute inset-0 top-24 left-4">
        <CardFront />
      </div>
    </div>
  );
};
