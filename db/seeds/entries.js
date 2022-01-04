const { warehousesData, inventoriesData } = require('../../data/data');

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('warehouse')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('warehouse').insert(warehousesData);
		})
		.then(() => {
			return knex('inventory').del();
		})

		.then(() => {
			return knex('inventory').insert(inventoriesData);
		});
};
