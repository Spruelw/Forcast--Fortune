import React, { useState } from "react";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Forcast from "./components/Forcast";
import "./App.css";

function App() {
  const [forcastData, setForcastData] = useState({});
 
  return (
    <div className="App">
      <Hero forcastData={forcastData} setForcastData={setForcastData} />
{/* home component if forcastData empty */}
      {Object.keys(forcastData).length > 0 ? (
        <Forcast forcastData={forcastData} setForcastData={setForcastData} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
