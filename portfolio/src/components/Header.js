import React from "react";
import logo from "../assets/statics/JT-logo.png";
import linkedin from "../assets/statics/linkedin.svg";
import github from "../assets/statics/github.svg";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img className="jtlogo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/johad-toledo-webdeveloper/">
            <img className="logoHeader" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/JohadToledo">
            <img className="logoHeader" src={github} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
