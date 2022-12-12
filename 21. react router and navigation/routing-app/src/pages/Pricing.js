import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

function Pricing() {

    const location = useLocation();

    console.log(location);

    return (<div>
        Show Pricing
        
        <Outlet />
    </div>);
}

export default Pricing;
