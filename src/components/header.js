import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

export function Header() {



  return (
    <div>
      <div id="header-container" className="row align-items-center justify-content-center">
        <div className="col text-center">
          <h1 className="bg-dark p-3">History of Astrobiology</h1>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto mb-2">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/Sources" className="nav-link">Sources</Link></li>
          <li className="nav-item"><Link to="/Blog" className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
        </ul>
        </div>
      </nav>
    </div>
  )
}