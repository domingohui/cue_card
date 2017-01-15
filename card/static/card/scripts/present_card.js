'use strict';

class Card extends React.Component {

    constructor () {
        super();
        // Store card data passed to this Card 
        this.state = {
            card: ( (this.props.card)? this.props.card : null ),
            display: ( (this.state.card===null) ? '' : this.state.card.cue_side ),
            showing_cue: true,
        }
    }

    switch_side () {
        if ( this.state.card.showing_cue )
            this.setState ( { display: this.state.card.other_side } );
        else
            this.setState ( { display: this.state.card.cue_side } );
        this.setState ( { showing_cue : !showing_cue } );
    }

    render () {
         return (
            <div onClick= {this.switch_side} >
            { this.state.display }
            </div>
        );
    }
}

class CardDisplay extends React.Component {
    constructor () {
        super ();
        this.state = {
            available: window.initialData,
            displayed: null
        };
    }

    render () {
        return (
            <Card card={this.state.available[0]} />
        );
    }
}

ReactDOM.render (
    <CardDisplay />,
    document.getElementById ('card_display')
);
