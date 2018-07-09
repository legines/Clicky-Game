import React, { Component } from "react";
import Animation from "../animation/fade";

class Card extends Component {

    handleClick = () => {
        this.props.onCardClick(this.props.index);
    }

    render(){ return(
        <Animation
            delay="1.5s"
            duration={500}>
            <div className="character">
                <img 
                    src={this.props.playCards.img} 
                    alt="cards" 
                    className="playingCard"
                    onClick={this.handleClick}/>
            </div>
        </Animation>
    )
    }
};

export default Card;