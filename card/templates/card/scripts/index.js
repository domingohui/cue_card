class IndexTabView extends React.Component {
	render: function() {
		return (
			for courseName in this.data { <
				div > courseName < div / > ;
			}
		);
	}
}

ReactDOM.render( <IndexTabView data={data} />);