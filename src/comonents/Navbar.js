import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
export default function Navbar() {

  let location = useLocation();
  let navigate = useNavigate();
const handleLogout = ()=>{
  localStorage.removeItem('token')
  navigate('/login')
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{cursor:'default'}} to='/'>Notes Keeper</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {localStorage.getItem('token')&&  <li className="nav-item">
             <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"> Home</Link>
            </li>}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about"> About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex">
            <Link className="btn btn-outline-success mx-2" to="/login" type="submit"> Login</Link>
            <Link className="btn btn-outline-success" to="/signup" type="submit"> Sign Up</Link>
          </form>: <button className="btn btn-outline-success" onClick={handleLogout}> Log out</button>}
        </div>
      </div>
    </nav>

  )
}
