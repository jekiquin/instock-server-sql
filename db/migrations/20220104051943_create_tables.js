exports.up = function (knex) {
	return knex.schema
		.createTable('warehouse', (table) => {
			table.string('id').primary();
			table.string('name').notNullable();
			table.string('address').notNullable();
			table.string('city').notNullable();
			table.string('country').notNullable();
			table.string('manager').notNullable();
			table.string('position').notNullable().defaultTo('Warehouse Manager');
			table.string('phone').notNullable();
			table.string('email').notNullable();
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('inventory', (table) => {
			table.string('id').primary();
			table
				.string('warehouse_id')
				.notNullable()
				.references('id')
				.inTable('warehouse')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.string('name').notNullable();
			table.string('description').notNullable();
			table.string('category').notNullable();
			table.integer('quantity').notNullable().defaultTo(0);
			table.string('status').notNullable();
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		});
};

exports.down = function (knex) {
	return knex.schema.dropTable('inventory').dropTable('warehouse');
};
