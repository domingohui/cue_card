'use strict';

class Card extends React.Component {

    constructor (props) {
        // React.Compoenent classes should call the base class ctor with props
        super(props); 
        
        // Store card data passed to this Card 
        // Ctor is the only place to ASSIGN to this.state
        // Use this.setState({...}) elsewhere
        this.state = {
            card: props.card, 
            display: ( (props.card===null) ? '' : props.card.other_side ),
            showing_cue: true,
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
