class CardDisplay extends React.Component {
    render () {
        return (
            <div>{ initialData }</div>
        );
    }
}

ReactDOM.render (
    <CardDisplay />,
    document.getElementById ('card_display')
);
