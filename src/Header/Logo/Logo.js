import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
function Logo() {
  return (
    <Link to={"/"}>
      <div className="Logo">Instagram</div>
    </Link>
  );
}

export default Logo;
