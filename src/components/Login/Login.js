import React from "react";
import { RiTwitterLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";

function Login() {
  return (
    <div id="login-container">
      <h2 className="tag-line">
        Log in to your twitter
        <IconContext.Provider value={{ color: "#000", size: "1.2em" }}>
          <span>
            <RiTwitterLine className="icons" />
          </span>
        </IconContext.Provider>
      </h2>
      <a href="https://twitter.com/login" className="twitter-button">
        Log in
        <span>
          <BsArrowRight className="line-icon" />
        </span>
      </a>
    </div>
  );
}

export default Login;
