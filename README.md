# ankhem-auth
Ankhem Component: Auth


## Usage


In your route config:
```javascript
var Auth = require('ankhem-auth')

module.exports = [
	{
		path: '/',
		component: Master,
		indexRoute: { component: Index },
		childRoutes: [
			Auth.config.router(Middleware.guest)
		]
	}
]
```

In your style.scss : 
```sass
@import '../../node_modules/ankhem-auth/config/style';
```
