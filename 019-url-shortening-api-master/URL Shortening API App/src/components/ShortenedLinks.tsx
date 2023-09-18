import { BreakLine } from "../styles/URLShortener.style";
import { MainContext } from "../App";
import { useContext } from "react";

export const ShortenedLinks = () => {
  const {shortenedLinks} = useContext(MainContext);

  const styleCopiedButton = (id: number) => {
    const copyBtns = Array.from(document.querySelectorAll("#copyB"));
    copyBtns.map((btn, i) => {
      if(i === id){
        btn.textContent = "Copied!";
        btn.classList.add("bg-dark-violet");
      } else {
        btn.textContent = "Copy";
        btn.classList.remove("bg-dark-violet");
      }
    });
  };

  const copyLink = (id: number) => {
    const linkToCopy = document.querySelector(`#p${id}`);
    if(linkToCopy?.textContent) navigator.clipboard.writeText(linkToCopy.textContent);
    styleCopiedButton(id);
  }

  return (
    <section className="flex flex-col gap-4 mt-28 z-10 w-full max-w-[1120px]">
      {shortenedLinks.map((link, i) => {
        return (
          <div key={i+1001} className="flex flex-col md:flex-row md:items-center bg-white py-4 rounded">
            <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
              <p className="text-very-d-violet break-all mx-4 md:mr-auto md:w-2/3">{link.longURL}</p>
              <BreakLine className="text-gray/75 my-2" />
              <p id={"p"+i} className="text-cyan break-all mx-4 md:w-1/3 md:mx-0 md:text-right">{link.shortURL}</p>
            </div>
            <button id={"copyB"} className="bg-cyan text-white mx-4 rounded-md py-2 mt-4 flex-grow font-bold md:mt-0 md:max-w-[112px] md:px-8 md:self-start" onClick={() => copyLink(i)}>Copy</button>
          </div>
        );
      })}
    </section>
  );
};