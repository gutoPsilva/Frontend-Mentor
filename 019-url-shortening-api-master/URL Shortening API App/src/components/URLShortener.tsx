import { URLContainer } from "../styles/URLShortener.style";

export const URLShortener = () => {
  return (
    <URLContainer>
      <input type="text" placeholder="Shorten a link here..." className="flex-grow py-3 px-3 rounded-lg md:py-3 md:px-5" />
      <button className="bg-cyan text-white font-bold py-3 px-9 rounded-lg md:py-2 hover:bg-teal-200 focus:bg-teal-200 outline-none transition">Shorten It!</button>
    </URLContainer>
  );
};