const tls = require('tls');
const next = require('next');
const crypto = require('crypto');
const fs = require('fs');

var privateKey = fs.readFileSync('./localhost.key').toString();
var certificate = fs.readFileSync('./localhost.crt').toString();

var credentials = tls.createSecureContext({key: privateKey, cert: certificate, secureProtocol: 'TLSv1_2_method' });
//var credentials = tls.createSecureContext({key: privateKey, cert: certificate});

const app = next({
	dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	var server = tls.createServer(credentials, handler);
	//server.setSecure(credentials);
	server.listen(443, (err) => {
			if (err) throw err;
			console.log('Ready on localhost:443');
		});
});

