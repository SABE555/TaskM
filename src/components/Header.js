import React from 'react'
import { Link } from "react-router-dom";

import '../style/headerstyle.css'
function Header(){
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to="/" className="navbar-brand">
                  Task Manager
         </Link>
        <div className="collpase nav-bar collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Task List
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                create Task 
              </Link>
            </li>
          
          </ul>
        </div>
      </nav>
     )
}
export default Header;