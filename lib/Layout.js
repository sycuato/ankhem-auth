var Layout = React.createClass({
	render: function(){
		return (
			<div id="Auth">
				<div style={{ width: '70%', marginLeft: '10%'}}>
					<this.props.auth />
				</div>
			</div>
		)
	}
})

module.exports = Layout;