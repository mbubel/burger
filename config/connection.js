// Set up MySQL connection.
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  port: 3306,
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "blinkM123",
  database: process.env.DATABASE || "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
