import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";

export const Background = () => {
  return (
    <div className="relative main-bg pt-4 xl:mr-[176px]">
      <div className="flex flex-col max-w-[375px] mx-auto md:absolute md:top-[calc(50%-176.75px)] md:m-0 md:flex-col-reverse md:gap-4 md:left-[calc(50%-130px)] lg:top-[calc(50%-218.94px)] lg:left-[calc(100%-375px)] md:max-w-fit lg:gap-6">
        <div className="flex self-end mr-3 md:mr-0 lg:-mr-10 xl:-mr-20">
          <CardBack />
        </div>
        <div className="ml-3 -mt-[76px] md:mt-0 lg:ml-12 xl:ml-24">
          <CardFront />
        </div>
      </div>
    </div>
  );
};
