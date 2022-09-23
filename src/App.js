
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
  const [arrState, setArrState] = useState(arrOfNums);
  return (
    <div className="App">
      <Header
        key={activeButton}
        activeButton={activeButton}
        setActiveButton={(name) => setActiveButton(name)}
      > </Header>
      {activeButton === "arabic" ? 
      <ToRoman
            key = {arrOfNums.length} 
            arrOfNums = {arrOfNums}
            setArrState = {setArrState}
            arrState = {arrState}
      ></ToRoman> :
      activeButton === "romanic" ?
      <ToNum 
            key = {arrOfNums.length} 
            arrOfNums = {arrOfNums}
            setArrState = {setArrState}
            arrState = {arrState}
      ></ToNum> : {}
      }
      <Answer 
        arrOfNums = {arrOfNums}
        arrState = {arrState}
        setArrState = {setArrState}
      ></Answer>
    </div>
  );
}

export default App;
