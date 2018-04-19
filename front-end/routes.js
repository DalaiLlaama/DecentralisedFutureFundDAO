const routes = require('next-routes')();

routes
	.add('/members/new', '/members/new')
	.add('/members/:address', '/members/show')
	.add('/proposals/new', '/proposals/new')
	.add('/proposals/:address', '/proposals/show')

module.exports = routes;
