const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			// target: 'https://6170w159x5.goho.co',
			// target: 'http://127.0.0.1:9090',
			target: 'http://219.153.109.118:60001',
			changeOrigin: true,
		})
	);
};
