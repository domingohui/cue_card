import React from 'react';
import PageNavigation from './PageNavigation.jsx';
import Card from './Card.jsx';
import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

function getRandomInt (min, max ) {
    return Math.floor ( Math.random() * max + min );
}

class CardDisplay extends React.Component {
    constructor ({data}) {
        super ();
        this.available = data;
        this.displayed = [];
        this.state = {
            // currentCardData is rendered by child component: Card
            currentCardData: this.fetchCardData()
        };
    }

    fetchCardData () {
        // Get a random card data
        let index = getRandomInt ( 0, this.available.length-1 );
        let toDisplay = this.available.splice ( index, 1 );
        // If removed 1 card successfully, put it in displayed for updating later
        if ( index != -1 && toDisplay.length == 1 ) {
            this.displayed.push(toDisplay[0]);
            this.updateCard(toDisplay[0].id);
            return toDisplay[0];
        }
        else {
            // All cards displayed
            // Shuffle and redisplay them
            this.available = Object.assign([], this.displayed);
            this.displayed = [];
            return this.fetchCardData();
        }
    }

    updateCard (cardId) {
        fetch('/update_counter/', {
            method: 'POST',
            body: { id: cardId }
        }).then(response=>console.log(response));
    }

    showNextCard() {
        this.setState({currentCardData: this.fetchCardData()});
    }

    render () {
        return (
            <div>
                <PageNavigation />
                <Card card={this.state.currentCardData} />
                <div className="row">
                    <span className="col l5" />
                    <span className="col l2" />
                    <a 
                        onClick={()=>this.showNextCard()} 
                        className="col l2 waves-effect waves-light btn"
                        >></a>
                    </div>
                </div>
        );
    }
}

export default CardDisplay;
