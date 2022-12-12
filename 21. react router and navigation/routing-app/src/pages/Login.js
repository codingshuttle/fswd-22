import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();

        if(name === 'Anuj') {
            navigate('/user/Anuj')
        } else {
            navigate('/about')
        }
    }
    
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>);
}

export default Login;
