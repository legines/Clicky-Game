import React, { Component } from 'react';
import Animation from '../animation/fade';
import CardDiv from './cardDiv';
import DisplayScore from './displayScore';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialCards = [
    {
        name: 'Ace of Diamond',
        img: 'img/diamonds/1-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Two of Diamonds',
        img: 'img/diamonds/2-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Three of Diamonds',
        img: 'img/diamonds/3-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Four of Diamonds',
        img: 'img/diamonds/4-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Five of Diamonds',
        img: 'img/diamonds/5-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Six of Diamonds',
        img: 'img/diamonds/6-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Seven of Diamonds',
        img: 'img/diamonds/7-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Eight of Diamonds',
        img: 'img/diamonds/8-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Nine of Diamonds',
        img: 'img/diamonds/9-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Ten of Diamonds',
        img: 'img/diamonds/10-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Jack of Diamonds',
        img: 'img/diamonds/11-diamonds.jpg',
        clicked: false
    },
    {
        name: 'Queen of Diamonds',
        img: 'img/diamonds/12-diamonds.jpg',
        clicked: false
    },
    {
        name: 'King of Diamonds',
        img: 'img/diamonds/13-diamonds.jpg',
        clicked: false
    }
]

class Game extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            cards: shuffleArray( initialCards )
        };
    }

    onCardClick = ( index ) =>{
        if( !this.state.cards[index].clicked ){
            this.setState({
                cards: shuffleArray( this.state.cards.map( (playCards, current) =>  {
                    return ( current === index ) ? { ...playCards, clicked:true } : playCards
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                cards: shuffleArray(this.state.cards.map( playCards => { return { ...playCards, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="game">
                <Animation 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every card once. Once you click a card the grid will shuffle.<br/>Try not to click the same card twice or the game will start all over!</h4>
                </Animation>
                <Animation 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <DisplayScore
                        score={this.state.user.score} />
                </Animation>
                <CardDiv 
                    cards={this.state.cards} 
                    onCardClick={this.onCardClick} />
            </div>
        )
    }
};

export default Game;