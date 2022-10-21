const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://6170w159x5.goho.co',
			// target: 'http://127.0.0.1:8080',
			changeOrigin: true,
		})
	);
};
