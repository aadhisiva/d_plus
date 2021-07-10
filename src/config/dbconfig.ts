import "reflect-metadata";
import { createConnection } from "typeorm";
import { d_plus_user } from '../entities/d_plus_user'
// import * as dotenv from "dotenv";
// dotenv.config();

const db = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "d_plus",
    password: "",
    synchronize: true,
    logging: false,
    entities: [d_plus_user]
})

export default db;

