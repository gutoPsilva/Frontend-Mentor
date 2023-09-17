import { useState } from "react";
import { URLContainer } from "../styles/URLShortener.style";
import axios from "axios";

type URLObject = {
  longURL: string;
  shortURL: string;
}

export const URLShortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [shortURL, setShortURL] = useState("");
  const savedLinks = localStorage.getItem("shortLinks");
  const shortenedLinks: URLObject[] = savedLinks ? JSON.parse(savedLinks) : [];
  console.log(shortenedLinks);

  const storageLinks = () => {
    localStorage.setItem("shortLinks", JSON.stringify(shortenedLinks));
  };

  const handleSubmit = async () => {
    if(originalURL == "") {
      console.log('invalid');
      setErrorMsg("Please add a link");}
    else {
      try {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${originalURL}`);
        const data = res.data;
        if (data.ok) {
          setShortURL(data.result.full_short_link);
          shortenedLinks.push({
            longURL: data.result.original_link,
            shortURL: data.result.full_short_link,
          });
          storageLinks();
        }
      } catch (err) {
        setErrorMsg("Invalid URL submitted");
      }
    }
    
  };

  return (
    <URLContainer>
      <input type="text" placeholder="Shorten a link here..." className="flex-grow py-3 px-3 rounded-lg md:py-3 md:px-5" onChange={(e) => setOriginalURL(e.target.value)}/>
      <button className="bg-cyan text-white font-bold py-3 px-9 rounded-lg md:py-2 hover:bg-teal-200 focus:bg-teal-200 outline-none transition" onClick={handleSubmit}>Shorten It!</button>
    </URLContainer>
  );
};