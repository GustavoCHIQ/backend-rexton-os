"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const USER = process.env['DB_USER'];
const HOST = process.env['DB_HOST'];
const NAME = process.env['DB_NAME'];
const PASS = process.env['DB_PASS'];
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: HOST,
    port: 5432,
    username: USER,
    password: PASS,
    database: NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
