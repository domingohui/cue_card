'use strict';

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
        this.state = {
            display: ( (props.card===null) ? '' : props.card.other_side ),
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

    switch_side () {
        if ( this.showing_cue )
            this.setState ( { display: this.card.other_side } );
        else
            this.setState ( { display: this.card.cue_side } );
        this.showing_cue = !this.showing_cue;
    }

    render () {
         return (
            <div onClick= { () => { this.switch_side() } } >
            { this.state.display }
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
            <Card card={this.fetchCardData()} />
        );
    }
}

ReactDOM.render (
    <CardDisplay />,
    document.getElementById ('card_display')
);

function getRandomInt (min, max ) {
    return Math.floor ( Math.random() * max + 1 );
}
