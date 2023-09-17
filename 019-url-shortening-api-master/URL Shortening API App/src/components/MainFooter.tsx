import { BoostContainer, StartedButton } from "../styles/MainStyles.style"


export const MainFooter = () => {
  return (
    <BoostContainer>
      <h2 className="text-white font-bold text-[1.7rem] md:text-4xl">Boost your links today</h2>
      <StartedButton className="bg-cyan">Get Started</StartedButton>
    </BoostContainer>
  );
}