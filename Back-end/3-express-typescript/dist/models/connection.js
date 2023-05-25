"use strict";
// ./models/connection.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise")); // instalar mysql2
// import { Options } from  'sequelize';
// require('dotenv').config();
exports.default = promise_1.default.createPool({
    host: process.env.DB_HOSTNAME || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '81914864',
    database: process.env.DB_DATABASE || 'books_api2',
});
// const config: Options = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || '81914864',
//   database: process.env.DB_NAME || 'books_api',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3306,
//   dialect: 'mysql',
// };
// export = config;
