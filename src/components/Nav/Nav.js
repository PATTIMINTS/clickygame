import React from "react";
import "./Nav.css";

const Nav = props => (
    
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li className="brand animated lightSpeedIn">
          <a href="/clickgame/">{props.title}</a>
        </li>
  
        <li id="rORw">{props.rORw}</li>
  
        <li id="cur-sco">Current Score: {props.score}</li>
  
        <li id="top-sco">Top Score: {props.topScore}</li>
      </ul>
    </nav>
   
  );
export default Nav;