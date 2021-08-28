import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "./login-form";


function LogIn(props) {

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
        const requestBody = `username=${credentials.username}&password=${credentials.password}`;
        console.log(requestBody);
        axios.post("http://localhost:8080/login",requestBody, {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
            .then(response => {
                console.log("successful login!!!");
                console.log(response);
                // headers attributes use small letters only
                sessionStorage.setItem("token", response.headers["authorization"]);
                sessionStorage.setItem("username", response.headers["username"]);
                sessionStorage.setItem("userid", response.headers["userid"]);
                props.history.push("/bookmarks");
            })
            .catch(error => {
                console.error("there was an issue logging in :(");
                if (error && !error.response) {
                    setNetworkError(true);
                } else if (error.response.status === 401) {
                    setError(true);
                }
            })
    };

    return <LoginForm onChange={handleChange} onSubmit={handleSubmit} networkError={networkError} error={error}></LoginForm>;
}

export default withRouter(LogIn);
//"file" import = Login 

/*
export function login ... 
export function logout ...
export function auth ...

//"file" import = {login: function(){..}, logout: function(){..}, auth: function(){..}} 
*/