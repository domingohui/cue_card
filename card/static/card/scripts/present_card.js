'use strict';

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class Card extends React.Component {

    constructor (props) {
        // React.Compoenent classes should call the base class ctor with props
        super(props); 
        
        // Store card data passed to this Card 
        // Ctor is the only place to ASSIGN to this.state
        // Use this.setState({...}) elsewhere
        this.card = props.card;
        this.showing_cue = true;
        // this.state only contains what is visually rendered
        if ( this.card ) {
            this.state = {
                cue_side: this.card.cue_side,
                other_side: this.card.other_side,
            }
        }
    }

    /* debug
    componentWillMount () {
        alert("Will mount");
    }

    componentDidMount () {
        alert("Did mount");
    }
    */

    flip () {
        this.showing_cue = !this.showing_cue;
    }

    render () {
        return (
            <div className={"card" + (this.showing_cue? "" : " flipped")} onClick={()=>this.flip()}>
            <div className="front">
            { this.state.cue_side}
            </div>
            <div className="back">
            { this.state.other_side}
            </div>
            </div>
        );
    }
}

class CardDisplay extends React.Component {
    constructor () {
        super ();
        this.available = window.initialData;
        this.displayed = [];
    }

    fetchCardData () {
        // Get a random card data
        let index = getRandomInt ( 0, this.available.length-1 );
        let toDisplay = this.available.splice ( index, 1 );
        // If removed 1 card successfully, put it in displayed for updating later
        if ( toDisplay.length == 1 ) {
            toDisplay = toDisplay[0];
            this.displayed.push ( toDisplay );
        }
        return toDisplay;
    }

    updateCards () {
    }

    render () {
        return (
            <div className="cardDisplay">
            <Card card={this.fetchCardData()} />
            </div>
        );
    }
}

function getRandomInt (min, max ) {
    return Math.floor ( Math.random() * max + min );
}

function fetchData () {
    $.get('/get_cards', {'course': window.COURSE_NAME},  function (data) {
        alert(data);
    });
}

fetchData();
render (
    <CardDisplay />,
    document.getElementById ('container')
);
