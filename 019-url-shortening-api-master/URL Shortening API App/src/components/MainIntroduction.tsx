import { GeneralContainer, StartedButton, TextContainer } from "../styles/MainStyles.style";
import IllustrationIMG from "../assets/images/illustration-working.svg";

export const MainIntroduction = () => {
  return (
    <GeneralContainer>
      <div className="min-w-[450px] max-w-3xl ml-4 -mr-44 transition-[margin] duration-300 sm:w-full xl:-mr-72">
        <img src={IllustrationIMG} alt="Working Illustration" className="w-full" />
      </div>
      <TextContainer>
        <h1 className="text-very-d-violet text-4xl mb-3 md:leading-[1.1] md:text-5xl lg:leading-[1.2] lg:text-6xl font-bold lg:mb-0">More than just shorter links</h1>
        <p className="text-grayish-violet max-w-md mb-6">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <StartedButton className="bg-cyan">Get Started</StartedButton>
      </TextContainer>
    </GeneralContainer>
  );
};
