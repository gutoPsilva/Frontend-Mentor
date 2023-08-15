import "./App.css";
import { useState } from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { Form } from "./components/Form";


function App() {
  return (
    <main className="App font-space-grotesk text-lg relative main-app pt-6">
      <div className="max-w-[375px] mx-auto">
        <div className="flex justify-end mr-4">
          <CardBack />
        </div>
        <div className="ml-4 -mt-[76px]">
          <CardFront />
        </div>
      </div>
      <div className="mx-4 mt-8">
        <Form />
      </div>
    </main>
  );
}

export default App;
