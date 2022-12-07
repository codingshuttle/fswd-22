import React, { useState } from "react";

function Counter() {
    const [count, setMyCount] = useState(0);

    // let count = countState[0];
    // let setCount = countState[1];

    // let count = 0;

    function updateCount() {
        setMyCount(count + 1);
        // count = count+1;
        console.log("count is", count);
    }

    return (
        <>
            <p>The value of count is: {count}</p>
            <button onClick={updateCount}>Increment</button>
        </>
    );
}

export default Counter;
