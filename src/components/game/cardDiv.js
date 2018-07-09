import React from "react";
import Card from "./card";

const CardDiv = (props) => {
  return(
    <div className="cardsDiv">
     {props.cards.map( (playCards, index) => <Card card={playCards} index={index} onCardClick={props.onCardClick} key={playCards.name} />)}
    </div>
  )
};

export default CardDiv;