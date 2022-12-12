import { joinPaths } from "@remix-run/router";
import React, { useEffect } from "react";
import { useParams } from "react-router";

function Profile() {

    const parameters = useParams();

    useEffect(() => {

    }, [parameters])

    return <div>
        <h1>Profile of {`${parameters.userId} ${parameters.projectId}`} </h1>
    </div>;
}

export default Profile;
