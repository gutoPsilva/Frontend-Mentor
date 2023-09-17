import { URLContainer } from "../styles/URLShortener.style";

export const URLShortener = () => {
  return (
    <URLContainer id="url">
      <input type="text" placeholder="Shorten a link here..." className="flex-grow py-3 px-3 rounded md:py-1" />
      <button className="bg-cyan text-white font-bold py-3 px-6 rounded md:py-2">Shorten It!</button>
    </URLContainer>
  );
};