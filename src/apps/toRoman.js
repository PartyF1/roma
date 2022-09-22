import React from "react";

function ToRoman() {
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
        console.log(await sendRequest({ number, system }));
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