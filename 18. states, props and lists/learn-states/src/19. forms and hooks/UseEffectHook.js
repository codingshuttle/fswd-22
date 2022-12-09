import React, { useEffect, useState } from "react";

function add(a, b) {
    return a+b;
}

function UseEffectHook() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    // cleanup work here
    function callThisOnUnmout() {
        console.log('unmounting here');
    }

    useEffect(() => {

        console.log(name, 'name updated');

        return callThisOnUnmout;

    }, [name]);

    useEffect(() => {
        console.log('first time mounted')
    }, [])

    useEffect(() => {
        console.log(counter, 'counter updated');
    }, [counter])

    useEffect(() => {
        console.log('re-rendering happened');
    })

    return (
        <div>
            <p>{counter}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </div>
    );
}

export default UseEffectHook;
