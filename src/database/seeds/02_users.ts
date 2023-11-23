import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: "2625c868-55d3-4655-a3b1-f1e4416b39ce",
            email: "kevin@gmail.com",
            password: "$2b$10$PVqjsfi6MZnP.Q..BnalrOJEXytsHvoLYfDpk/mp4iIoxzQWtOnqC",
            isAdmin: true
        },
        {
            id:"fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6",
            email: "steven@gmail.com",
            password: "$2b$10$wITEwg1ycopDQzLG/6cLJeDIXo2ed.X56pL2.gdJKMCvGt1ftfI7a",
            isAdmin: true
        }
    ]);
};
