
import './App.css';
import { useState } from "react";
import Button from './apps/button';
import Header from "./apps/header"
import ToNum from './apps/toNum';
import ToRoman from './apps/toRoman';
import Answer from './apps/answer';

function App() {
  const arrOfNums = [];
  const [activeButton, setActiveButton] = useState("arabic");
  const [arrState] = useState(arrOfNums.length);
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
      <Answer 
        arrOfNums = {arrOfNums}
        arrState = {arrState}
      ></Answer>
    </div>
  );
}

export default App;
