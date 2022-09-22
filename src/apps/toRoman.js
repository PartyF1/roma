import React from "react";

function ToRoman() {
    const input1 = React.createRef()
    const input2 = React.createRef()

    async function sendRequest(params = {}) {
        const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        const result = await fetch(`http://api/?${query}`);
        return await result.text();
     }

    async function sendToBack() {
        console.log(await sendRequest({ input1, input2 }));
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