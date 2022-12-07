import React from "react";

function Child2(props) {

    const showPrivateData = true;

    return (
        <div>

            <div>
                {showPrivateData ? <p>This is private: jdashfh89732haksjh</p>: <></>}
                {showPrivateData && <p>This is private: jdashfh89732haksjh</p>}
            </div>
            

            Count inside child2: {props.countFromParent}
            <button onClick={props.uploadData}>Upload Data</button>
        </div>
    );
}

export default Child2;
