const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://6170w159x5.goho.co',
			changeOrigin: true,
		})
	);
};
