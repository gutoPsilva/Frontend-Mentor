import "./App.css";
import { useState, createContext } from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { Form } from "./components/Form";

// this is redundant as fuck i know, still learning TS...
interface IAppContext {
  holderName: string;
  setHolderName(arg: string): void;
  cardNumber: string;
  setCardNumber(arg: string): void;
  cardMonth: string;
  setCardMonth(arg: string): void;
  cardYear: string;
  setCardYear(arg: string): void;
  cardCVC: string;
  setCardCVC(arg: string): void;
}

export const AppContext = createContext<IAppContext>({
  holderName: "",
  setHolderName: () => {},
  cardNumber: "",
  setCardNumber: () => {},
  cardMonth: "",
  setCardMonth: () => {},
  cardYear: '',
  setCardYear: () => {},
  cardCVC: '',
  setCardCVC: () => {}
});

function App() {
  const [holderName, setHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  return (
    <main className="App font-space-grotesk text-lg relative">
      <AppContext.Provider value={{ holderName, setHolderName, cardNumber, setCardNumber, cardMonth, setCardMonth, cardYear, setCardYear, cardCVC, setCardCVC }}>
        <div className="pt-6 mx-auto sm:max-w-none xl:mx-0 xl:ml-auto xl:flex xl:flex-col-reverse main-bg xl:absolute xl:top-0 xl:left-0 xl:bottom-0">
          <div className="flex justify-end mr-4">
            <CardBack />
          </div>
          <div className="ml-4 -mt-[76px] ">
            <CardFront />
          </div>
        </div>
        <div className="mx-4 mt-8 xl:max-w-md xl:mr-auto">
          <Form />
        </div>
      </AppContext.Provider>
    </main>
  );
}

export default App;
