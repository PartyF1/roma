import React from "react";
import {useState} from "react";

function ToNum(props) {
    const {arrOfNums} = props;
    const [state, setState] = useState(false);
    const input1 = React.createRef()

    async function sendRequest(params = {}) {
        let query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        let result = await fetch(`http://api/?${query}`);
        return await result.text();
    }

    async function sendToBack() {
        let romanic = input1.current.value;
        const newNum = await sendRequest({romanic})
        if (newNum != "") arrOfNums.push(newNum);
        setState(!state);
    }

    return (
        <div>
            <input id="romanNum" ref={input1}></input>
            <button onClick={sendToBack}>Жям</button>
        </div>
    )
}

export default ToNum;