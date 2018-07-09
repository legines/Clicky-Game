import React from "react";
import Animation from "../animation/fade";

const Footer = () => {
  return(
    <footer className="footy">
      <Animation delay={"1s"} duration={500} length={"20px"} direction={"top"}>
        <a href="" target="_blank" rel="noopener noreferrer"><h3>hi</h3></a>
      </Animation>
    </footer>
  )
};

export default Footer;