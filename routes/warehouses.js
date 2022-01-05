const router = require('express').Router();
const config = require('../db/knexfile');
const knex = require('knex')(config.development);

router.get('/', (_req, res, _next) => {
	knex('warehouse')
		.select()
		.then((warehouses) => {
			res.status(200).json(warehouses);
		});
});
module.exports = router;
