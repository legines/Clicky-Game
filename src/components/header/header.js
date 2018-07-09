import React from "react";
import Animation from "../animation/fade";

const Header = () => {
  return(
    <header className="appHeader">
      <Animation in={true} duration={600} length={"30px"} direction={"bottom"}>
        <h1>Clicky-Game!</h1>
      </Animation>
    </header>
  )
};

export default Header;