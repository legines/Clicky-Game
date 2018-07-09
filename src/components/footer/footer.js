import React from "react";
import Animation from "../animation/fade";

const Footer = () => {
  return(
    <footer className="footy">
      <Animation delay={"1s"} duration={500} length={"20px"} direction={"top"}>
        <a href="https://github.com/legines" target="_blank" rel="noopener noreferrer"><h5>Luis Gines 2018</h5></a>
      </Animation>
    </footer>
  )
};

export default Footer;