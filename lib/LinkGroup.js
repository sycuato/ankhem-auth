var LinkGroup = React.createClass({

	data: [
		{
			type: 	'login',
			url: 	'/auth/login',
			text: 	'登录',
		},
		{
			type: 	'register',
			url: 	'/auth/register',
			text: 	'注册',
		},
		{
			type: 	'password',
			url: 	'/auth/password',
			text: 	'忘记密码？',
		},
	],

	renderLinkList: function(){
		return this.data.map( this.renderLinkItem );
	},

	renderLinkItem: function(link, index){

		if(this.props.type == link.type){
			return
		}

		return (
			<RR.Link
				to={link.url} key={index}
				className="btn btn-default" role="button"
			>
				{link.text}
			</RR.Link>
		);
	},

	render: function() {
		return (
			<div
				id="LinkGroup"
				className="btn-group btn-group-justified"
				role="group"
				style={{ marginTop: '20px' }}
			>
				{ this.renderLinkList() }
			</div>
		);
	},
});

module.exports = LinkGroup;