import React from "react";

function ToNum() {
    const input1 = React.createRef()

    async function sendRequest(params = {}) {
        let query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        let result = await fetch(`http://api/?${query}`);
        return await result.text();
    }

    async function sendToBack() {
        let romanic = input1.current.value;
        console.log(await sendRequest({romanic}));
    }

    return (
        <div>
            <input id="romanNum" ref={input1}></input>
            <button onClick={sendToBack}>Жям</button>
        </div>
    )
}

export default ToNum;