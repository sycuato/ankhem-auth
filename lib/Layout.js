var Layout = React.createClass({
	render: function(){
		return (
			
			<div id="PageLogin">
				<div className="container" style={{ marginTop: '100px' }}>
					<div className="row">
						<div className="col-md-offset-4 col-md-4">
							<div id="Auth">
								<div style={{ width: '70%', marginLeft: '10%'}}>
									<this.props.auth />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Layout;