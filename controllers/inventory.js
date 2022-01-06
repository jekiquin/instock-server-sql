const knex = require('../db/knex-instance');
const createError = require('http-errors');
const res = require('express/lib/response');

const inventoryWithWarehouseName = () => {
	return knex('inventory')
		.select('inventory.*', 'warehouse.name as warehouse_name')
		.innerJoin('warehouse', 'inventory.warehouse_id', 'warehouse.id');
};

const getAllInventories = async (_req, res) => {
	const inventories = await inventoryWithWarehouseName();
	res.status(200).json(inventories);
};

const verifyInventoryId = async (req, _res, next) => {
	const { inventoryId } = req.params;
	try {
		const inventory = await inventoryWithWarehouseName().where(
			'inventory.id',
			'=',
			inventoryId
		);
		if (!inventory.length) {
			return next(createError(404, `Inventory ${inventoryId} not found!`));
		}
		req.inventory = inventory;
		next();
	} catch (error) {
		next(error);
	}
};

const getInventoryById = async (req, res) => {
	const [inventory] = req.inventory;
	res.status(200).json(inventory);
};

module.exports = {
	getAllInventories,
	verifyInventoryId,
	getInventoryById
};
