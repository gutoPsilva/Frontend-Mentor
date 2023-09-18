import { useState, useContext } from "react";
import { MainContext } from "../App";
import { ErrorContainer, URLContainer } from "../styles/URLShortener.style";
import axios from "axios";

export const URLShortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { shortenedLinks, setShortenedLinks } = useContext(MainContext);
  console.log(shortenedLinks);

  const storageLinks = (lURL: string, sURL: string) => {
    localStorage.setItem(
      "shortLinks",
      JSON.stringify([
        ...shortenedLinks,
        {
          longURL: lURL,
          shortURL: sURL,
        },
      ])
    );
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${originalURL}`);
      const data = res.data;
      if (data.ok) {
        const originalLink = data.result.original_link;
        const newLink = data.result.full_short_link;
        setShortenedLinks([
          ...shortenedLinks,
          {
            longURL: originalLink,
            shortURL: newLink,
          },
        ]);
        storageLinks(originalLink, newLink);
        setErrorMsg("");
        console.log(localStorage.getItem("shortLinks"));
      }
    } catch (err) {
      setErrorMsg("Invalid URL submitted");
    }
  };

  const handleSubmit = () => {
    if (originalURL.trim() === "") {
      // cut whitespaces
      setErrorMsg("Please add a link");
    } else {
      fetchData();
    }
  };

  return (
    <URLContainer>
      <div className="flex flex-col flex-grow">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={`rounded-lg py-3 px-3 md:px-5 border-2 border-transparent ${errorMsg && "border-red placeholder:text-red/75 outline-none"} duration-300 transition`}
          onChange={e => setOriginalURL(e.target.value)}
          onKeyUp={e => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        {errorMsg && <ErrorContainer className="text-red italic">{errorMsg}</ErrorContainer>}
      </div>

      <button className="bg-cyan text-white font-bold py-3 px-9 rounded-lg md:py-2 hover:bg-teal-200 focus:bg-teal-200 outline-none transition" onClick={handleSubmit}>
        Shorten It!
      </button>
    </URLContainer>
  );
};
