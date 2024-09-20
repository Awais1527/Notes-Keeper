import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });




    const host = process.env.HOST_URL


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate('/')

        } else {
            alert('invalid credentials');
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form style={{ margin: "100px 0px 0px" }}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-outline-success mx-2" >Login</button>
            </form>
        </div>
    )
}
