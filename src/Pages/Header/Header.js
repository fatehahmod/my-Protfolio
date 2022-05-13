import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg gradient">
        <div className="container">
          <Link className="navbar-brand rounded-5" to="/"><img width="25px" height="25px" src="https://i.ibb.co/frKR7V8/fa.png" alt=""/> Fateh Ahmod</Link>
          <button className="navbar-toggler bg-light" style={{height:"40px"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-dark"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;