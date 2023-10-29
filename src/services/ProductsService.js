const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class ProductsService {
	constructor() {
		this._pool = new Pool();
	}

	async addProduct({ name, price, category }) {
		const id = nanoid(16);
		const query = {
			text: 'INSERT INTO products VALUES($1, $2, $3, $4) RETURNING id',
			values: [id, name, price, category],
		};

		const result = await this._pool.query(query);
		return result.rows[0].id;
	}
}

module.exports = ProductsService;
