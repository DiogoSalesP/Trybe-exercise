// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2
// import { Options } from  'sequelize';
// require('dotenv').config();

export default mysql.createPool({
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