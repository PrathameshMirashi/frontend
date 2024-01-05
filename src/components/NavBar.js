import React from "react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not already installed
import "./Navbar.css";
const NavBar = (props) => {
  const shoot = () => {
    console.log(props.data);
  };
  return (
    <body>
      <nav>
        <div class="navbar">
          <a href="/home">Home</a>
          <div class="dropdown">
            <button onClick={shoot} class="dropbtn">
              Men
            </button>
            <div class="dropdown-content">
              <a href="/shirt">Shirt</a>
              <a href="/t-shirt">T-shirt</a>
              <a href="/jeans">Jeans</a>
            </div>
          </div>
          <div class="dropdown">
            <button onClick={shoot} class="dropbtn">
              Women
            </button>
            <div class="dropdown-content">
              <a href="/kurti">kurti</a>
              <a href="/trouser">Trouser</a>
              <a href="/salvar">Salvar</a>
            </div>
          </div>
          <div class="dropdown"></div>
          <div className="search-container">
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
      </nav>
    </body>
  );
};
//npm install --save-dev @babel/plugin-proposal-private-property-in-object

export default NavBar;
