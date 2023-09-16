import "./App.css";
import { MainIntroduction } from "./components/MainIntroduction";
import { Navbar } from "./components/Navbar";
import { URLShortener } from "./components/URLShortener";

function App() {
  return (
    <div className="font-popins text-lg overflow-hidden">
      <header className="flex items-center max-w-6xl mx-4 xl:px-4 xl:mx-auto font-bold pt-6">
        <Navbar />
      </header>
      <main className="flex flex-col items-center max-w-6xl xl:px-4 xl:mx-auto font-medium py-6">
        <MainIntroduction />
        <section className="w-full px-4 xl:px-0">
          <URLShortener />
        </section>
      </main>
    </div>
  );
}

export default App;
