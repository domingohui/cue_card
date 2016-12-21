class IndexTabView extends React.Component {
	render: function() {
		return (
			for courseName in this.data {
				<li> <a href="{% url 'present_card' course %}">courseName</a></li>
			}
		);
	}
}

ReactDOM.render( <IndexTabView data={data} />);