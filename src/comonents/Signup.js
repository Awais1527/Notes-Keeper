import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
export default function Signup() {
  const [credentials, setCredentials] = useState({ name:'',email: '', password: '',cpassword:'' });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
};
const host = process.env.HOST_URL
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
    
      body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password }),
      
  });
  const json = await response.json();
  console.log(json)
  if (json.success) {
      localStorage.setItem('token', json.authToken)
      navigate('/')
      alert('user saved');
  } else {
      alert('invalid credentials');
  }

}
  return (
    <div className="container">
      <form style={{ margin: "100px 0px 0px" }}  onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password'onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange}/>
        </div>

        <button type="submit" className="btn btn-outline-success mx-2">Sign Up</button>
      </form>
    </div>
  )
}
