const inventories = require('./inventories');
const warehouses = require('./warehouses');

const warehousesData = warehouses.map((warehouse) => ({
	id: warehouse.id,
	name: warehouse.name,
	address: warehouse.address,
	city: warehouse.city,
	country: warehouse.country,
	manager: warehouse.contact.name,
	position: warehouse.contact.position,
	phone: warehouse.contact.phone,
	email: warehouse.contact.email
}));

const inventoriesData = inventories.map((inventory) => ({
	id: inventory.id,
	warehouse_id: inventory.warehouseID,
	name: inventory.itemName,
	description: inventory.description,
	category: inventory.category,
	quantity: inventory.quantity,
	status: inventory.status
}));

module.exports = {
	warehousesData,
	inventoriesData
};
