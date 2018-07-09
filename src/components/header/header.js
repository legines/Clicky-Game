import React from "react";
import Animation from "../animation/fade";

const Header = () => {
  return(
    <header className="appHeader">
      <Animation in={true} duration={600} length={"30px"} direction={"bottom"}>
        <h2>Clicky-Game!</h2>
      </Animation>
    </header>
  )
};

export default Header;