import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import RegisterForm from "./register-form";


function Register(props) {

    const [credentials, setCredentials] = useState("");
    const [error, setError] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]:value});
        setError(false);
        setNetworkError(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // param=value&param2=value2...
        const requestBody = `username=${credentials.username}
            &password=${credentials.password}
            &email=${credentials.email}`;
        console.log(requestBody);
        axios.post("http://localhost:8080/register",requestBody, {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
            .then(response => {
                console.log("successful register!");
                console.log(response);
                props.history.push("/login");
            })
            .catch(error => {
                console.error("there was an issue logging in :(");
                if (error && !error.response) {
                    setNetworkError(true);
                } else if (error.response.status === 406) {
                    setError(true);
                }
            })
    };

    return <RegisterForm onChange={handleChange} onSubmit={handleSubmit}
        networkError={networkError} error={error}></RegisterForm>;
}

export default withRouter(Register);
//"file" import = Login 

/*
export function login ... 
export function logout ...
export function auth ...

//"file" import = {login: function(){..}, logout: function(){..}, auth: function(){..}} 
*/