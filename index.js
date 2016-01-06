var Login 	= require('./lib/Login')

// config
var router = require('./config/router')

var Auth = {
	Login: Login,
	config: {
		router: router
	}
}


module.exports = Auth;
