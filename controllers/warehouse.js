const knex = require('../db/knex-instance');
const createError = require('http-errors');

const getAllWarehouses = async (_req, res) => {
	const warehouses = await knex('warehouse').select();
	res.status(200).json(warehouses);
};

const verifyWarehouseId = async (req, _res, next) => {
	const { warehouseId } = req.params;
	try {
		const warehouse = await knex('warehouse').select().where({ id: warehouseId });
		if (!warehouse.length) {
			return next(createError(404, `Warehouse ${warehouseId} not found!`));
		}
		req.warehouse = warehouse;
		next();
	} catch (error) {
		next(error);
	}
};

const getWarehouseById = async (req, res) => {
	const { warehouseId } = req.params;
	const [warehouse] = req.warehouse;

	const inventories = await knex('inventory').select().where({ warehouse_id: warehouseId });
	res.status(200).json({ ...warehouse, inventories });
};

module.exports = {
	getAllWarehouses,
	getWarehouseById,
	verifyWarehouseId
};
