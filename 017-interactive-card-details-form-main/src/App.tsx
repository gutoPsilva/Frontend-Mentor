import "./App.css";
import { useState } from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";


function App() {
  return (
    <main className="App font-space-grotesk text-lg relative main-app pt-6">
      <div className="ml-12 mr-4">
        <CardBack />
      </div>
      <div className="ml-4 -mt-[76px]">
        <CardFront />
      </div>
    </main>
  );
}

export default App;
