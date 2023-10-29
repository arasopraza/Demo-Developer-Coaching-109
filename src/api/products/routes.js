const routes = (handler) => [
	{
		method: 'POST',
		path: '/products',
		handler: handler.addProductHandler,
	},
];

module.exports = routes;