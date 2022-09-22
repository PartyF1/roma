
import './App.css';
import { useState } from "react";
import Button from './apps/button';
import Header from "./apps/header"
import ToNum from './apps/toNum';
import ToRoman from './apps/toRoman';
import Send from './apps/send';

function App() {
  const [activeButton, setActiveButton] = useState("arabic");
  return (
    <div className="App">
      <Header
        key={activeButton}
        activeButton={activeButton}
        setActiveButton={(name) => setActiveButton(name)}
      > </Header>
      {activeButton === "arabic" ? 
      <ToRoman></ToRoman> :
      activeButton === "romanic" ?
      <ToNum></ToNum> : {}
      }
      <Send></Send>
    </div>
  );
}

export default App;
