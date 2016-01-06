var Login = require('../lib/Login')

var router = function(middleware){

	var config = {
		path: '/auth',
		onEnter: middleware,
		childRoutes: [
			{ path: 'login', 	component: Login },
			// { path: 'password', component: Password },
			// { path: 'register', component: Register },
		]
	}

	return config
}

module.exports = router