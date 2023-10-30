const routes = (handler) => [
	{
		method: 'POST',
		path: '/products',
		handler: handler.addProductHandler,
	},
	{
		method: 'GET',
		path: '/products',
		handler: handler.getAllProductsHandler,
	},
];

module.exports = routes;