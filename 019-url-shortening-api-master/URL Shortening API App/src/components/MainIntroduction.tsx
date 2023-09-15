import { GeneralContainer, TextContainer } from "../styles/MainIntroduction.style";
import IllustrationIMG from "../assets/images/illustration-working.svg";

export const MainIntroduction = () => {

  return (
    <GeneralContainer>
      <img src={IllustrationIMG} alt="Working Illustration" className="-mr-60 " />
      <TextContainer>
        <h1 className="text-very-d-violet text-4xl md:text-6xl">More than just shorter links</h1>
        <p className="text-grayish-violet">Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className="bg-cyan text-white rounded-full px-8 py-2 w-fit">Get Started</button>
      </TextContainer>
    </GeneralContainer>
  );
};