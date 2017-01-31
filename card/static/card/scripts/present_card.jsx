'use strict';

import React from 'react';
import {render} from 'react-dom';
window.$ = require('jquery');
require ('materialize-css/sass/materialize.scss');

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
                display: this.card.cue_side
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
        if ( this.showing_cue ) {
            this.setState ({
                display: this.card.other_side
            });
        }
        else {
            this.setState ({
                display: this.card.cue_side
            });
        }
        this.showing_cue = !this.showing_cue;
    }

    render () {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <div className="card-content white-text">
                                {this.state.display}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a className="col s6 waves-effect waves-light btn-large" onClick={()=>{this.flip()}}>Turn</a>
                </div>
            </div>
        );
    }
}

class PageNavigation extends React.Component {
    // Navigates between different pages of the app

    render () {
        return (
            <div className="row">
                <div className="col s8"></div> 
                <a className="col s4" href="/">Back</a>
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
            <div>
                <PageNavigation />
                <Card card={this.fetchCardData()} />
            </div>
        );
    }
}

function getRandomInt (min, max ) {
    return Math.floor ( Math.random() * max + min );
}

function fetchInitialData () {
    $.get('/get_cards', {'course': window.COURSE_NAME},  function (data) {
        console.log(data.data.slice(0));
        window.initialData = data.data;
        render (
            <CardDisplay />,
            document.getElementById ('container')
        );
    });
}

fetchInitialData();
