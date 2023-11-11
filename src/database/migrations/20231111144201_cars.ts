import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    // activate uuid-ossp in postgres 
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    return knex.schema.createTable('cars', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('plate');
        table.string('manufacture');
        table.string('model');
        table.string('image');
        table.integer('rentPerDay');
        table.integer('capacity');
        table.text('description');
        table.timestamp('availableAt').defaultTo(knex.fn.now());
        table.string('transmission');
        table.boolean('available');
        table.string('type');
        table.integer('year');
        
        table.jsonb('options');
        table.jsonb('specs');

        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cars');
}

