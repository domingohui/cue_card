import React from 'react';
import PageNavigation from './PageNavigation.jsx';
import Card from './Card.jsx';
    
function getRandomInt (min, max ) {
        return Math.floor ( Math.random() * max + min );
}

class CardDisplay extends React.Component {
    constructor ({data}) {
        super ();
        this.available = data;
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

export default CardDisplay;
