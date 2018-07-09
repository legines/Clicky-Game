import React from "react";

const DisplayScore = (props) => (
  <div className="scoreBoard">
    Score: {props.score}
  </div>
);

export default DisplayScore;