import "./App.css";
import { useState, createContext } from "react";
import { Form } from "./components/Form";
import { Background } from "./components/Background";
import { Complete } from "./components/Complete";

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
  setComplete(arg: boolean): void;
}

export const AppContext = createContext<IAppContext>({
  holderName: "",
  setHolderName: () => {},
  cardNumber: "",
  setCardNumber: () => {},
  cardMonth: "",
  setCardMonth: () => {},
  cardYear: "",
  setCardYear: () => {},
  cardCVC: "",
  setCardCVC: () => {},
  setComplete: () => {}
});

function App() {
  const [holderName, setHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [complete, setComplete] = useState(false);

  return (
    <main className="App font-space-grotesk text-lg relative md:flex md:justify-between md:items-center min-h-screen">
      <AppContext.Provider value={{ holderName, setHolderName, cardNumber, setCardNumber, cardMonth, setCardMonth, cardYear, setCardYear, cardCVC, setCardCVC, setComplete }}>
        <Background />
        <div className="mx-4 mt-12 md:max-w-sm md:m-auto lg:max-w-md">
          {complete ? <Complete /> : <Form />}
        </div>
      </AppContext.Provider>
    </main>
  );
}

export default App;
