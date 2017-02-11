import React from 'react';

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
            <div className="container">
                <div className="row" >
                    <div className="col l3"></div>
                    <div className="col s12 m6 l6">
                        <div className="card-panel teal">
                            <div className="card-content white-text">
                                {this.state.display}
                            </div>
                        </div>
                    </div>
                    <div className="col l3"></div>
                </div>
                <div className="row">
                    <span className="col l3" />
                    <a className="col l2 waves-effect waves-light btn">&#60;</a>
                    <span className="col l2" />
                    <a className="col l2 waves-effect waves-light btn">></a>
                </div>
                <div className="row">
                    <a className="col s9 m3 l2 waves-effect waves-light btn-large" onClick={()=>{this.flip()}}>Turn</a>
                </div>
            </div>
        );
    }
}

export default Card;
