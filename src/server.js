const Hapi = require('@hapi/hapi');
const products = require('./api/products');
const ProductsService = require('./services/ProductsService');
require('dotenv').config();

const init = async () => {
	const productsService = new ProductsService();
	const server = Hapi.server({
		port: 3000,
		host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
		routes: {
				cors: {
						origin: ['*'],
				},
		},
	});

	await server.register({
		plugin: products,
		options: {
			service: productsService,
		},
	});

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();