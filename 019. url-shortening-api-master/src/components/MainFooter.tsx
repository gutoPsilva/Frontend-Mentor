import { BoostContainer, StartedButton } from "../styles/Main.style"


export const MainFooter = () => {
  return (
    <BoostContainer>
      <h2 className="text-white font-bold text-[1.7rem] md:text-4xl">Boost your links today</h2>
      <StartedButton
        className="bg-cyan hover:bg-teal-200 focus:bg-teal-200 transition outline-none"
        onClick={() => {
          document.getElementById("url")?.scrollIntoView();
        }}>
        Get Started
      </StartedButton>
    </BoostContainer>
  );
}