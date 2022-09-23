import React from "react";
import {useState} from "react";

function ToRoman(props) {
    const {arrOfNums} = props;
    const [state, setState] = useState(false);
    const input1 = React.createRef()
    const input2 = React.createRef()

    async function sendRequest(params = {}) {
        let query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        let result = await fetch(`http://api/?${query}`);
        return await result.text();
    }

    async function sendToBack() {
        let number = input1.current.value;
        let system = input2.current.value;
        const newRoman = await sendRequest({ number, system });
        if (newRoman != "") arrOfNums.push(newRoman);
        setState(!state);
    }

    return (
        <div>
            <input id="arabNum" ref={input1}></input>
            <input id="system" ref={input2}></input>
            <button onClick={sendToBack}>Жям</button>
        </div>
    )
}

export default ToRoman;