import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle,faHome,faSearch} from "@fortawesome/free-solid-svg-icons";
function Menu() {
  return <nav>
      <ul>
       <li ><Link to={'/post/create'}><FontAwesomeIcon icon={faPlusCircle}/></Link></li>
          <li><Link to={'/'}><FontAwesomeIcon icon={faHome}/></Link></li>
          <li><Link to={'/search'}><FontAwesomeIcon icon={faSearch}/></Link></li>

      </ul>
  </nav>;
}

export default Menu;
