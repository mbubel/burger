// Set up MySQL connection.
let mysql = require("mysql");

let connection = mysql.createPool({
  host: process.env.DATABASE_HOST || "localhost",
  port: 3306,
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "blinkM123",
  database: process.env.DATABASE || "burgers_db",
});

// Export connection for our ORM to use.
module.exports = connection;
