import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import knex from "knex";
import { Model } from "objection";

// Routers
import CarRoutes from "./routers/CarRoutes";


const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'docker'
    },
});

// Connect ORM to Database
Model.knex(knexInstance);


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));

        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Ini adalah route cuyy OOP TS");
        });
        this.app.use("/api/v1/cars", CarRoutes);
    }
}

const PORT: number = 8000;
const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

