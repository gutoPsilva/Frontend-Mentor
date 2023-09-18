import "./App.css";
import { createContext, useState } from "react";
import { Footer } from "./components/Footer";
import { MainFeatures } from "./components/MainFeatures";
import { MainFooter } from "./components/MainFooter";
import { MainIntroduction } from "./components/MainIntroduction";
import { Navbar } from "./components/Navbar";
import { URLShortener } from "./components/URLShortener";

type URLObject = {
  longURL: string;
  shortURL: string;
};

type MainCType = {
  shortenedLinks: URLObject[];
  setShortenedLinks: (prevState: URLObject[]) => void;
};

export const MainContext = createContext<MainCType>({
  shortenedLinks: [],
  setShortenedLinks: () => {}
});

function App() {
  const savedData = localStorage.getItem("shortLinks");
  const [shortenedLinks, setShortenedLinks] = useState(savedData ? JSON.parse(savedData) : []);
  // const shortenedLinks: (URLObject[] | []) = savedData ? JSON.parse(savedData) : [];

  return (
    <div className="font-popins text-lg overflow-hidden">
      <header className="flex items-center max-w-6xl mx-4 xl:px-4 xl:mx-auto font-bold pt-6">
        <Navbar />
      </header>
      <MainContext.Provider value={{shortenedLinks, setShortenedLinks}}> {/* the links generated on URLShortener will be passed to MainFeatures via useContext */}
        <main className="flex flex-col items-center xl:mx-auto font-medium pt-6">
          <div className="max-w-6xl xl:px-4">
            {" "}
            {/* container because of the illustration img */}
            <MainIntroduction />
            <section className="w-full px-4 xl:px-0 -mb-[82px] md:-mb-[58px] lg:-mb-[66px] relative" id="url">
              <URLShortener />
            </section>
          </div>
          <MainFeatures />
          <MainFooter />
        </main>
      </MainContext.Provider>
      <Footer />
    </div>
  );
}

export default App;