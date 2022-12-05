import React from "react";

function Avatar(props) {
    return <img src={props.image} alt={props.name} />;
}

function addition(a) {
    return a.firstNum + a.secondNum;
}

export default Avatar;
