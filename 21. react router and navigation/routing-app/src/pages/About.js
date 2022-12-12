import React from "react";
import { useLocation } from "react-router";

function About() {

    const location = useLocation()
    const data = location.state;

    console.log(data);

    return <div>About</div>;
}

export default About;
