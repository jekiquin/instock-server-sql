const knex = require('../db/knex-instance');

const getAllWarehouses = (_req, res, next) => {
	knex('warehouse')
		.select()
		.then((warehouses) => {
			res.status(200).json(warehouses);
		});
};

module.exports = {
	getAllWarehouses
};
