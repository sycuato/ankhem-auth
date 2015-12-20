var Form 		= require('ankhem-form');
var LinkGroup 	= require('./LinkGroup');
var Layout		= require('./Layout');

var Login = React.createClass({

	// formCallback: function(data, status, jqXHR){
		

	// 	window.localStorage.token = data.token;

	// 	if( this.props.location.state.redirect ){
	// 		this.history.pushState(null, this.props.location.state.redirect);
	// 	}else{
	// 		this.history.pushState(null, '/home');
	// 	}
	// },


	renderLogin: function(){
		return (
			<div id="Login">

				<Form 
					className='form-horizontal form-auth'
					fields={[
						{
							name: 'phone',
							type: 'text',
							placeholder: '手机',
						},
						{
							name: 'password',
							type: 'password',
							placeholder: '密码',
						},
					]}
					button={{
						url: '',
						// url: Url().auth.login,
						text: '登录',
						className: 'btn-primary form-control',
						callback: this.formCallback,
					}} />

				<LinkGroup type="login" />

			</div>
		)
	},

	render: function(){

		return (
			<Layout auth={this.renderLogin} />
		);
	}

});

module.exports = Login;