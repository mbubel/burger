let connection = require("./connection");

exports.selectAll = (cb) => {
  connection.query(
    "SELECT id, burger_name, devoured from burgers",
    (err, res) => {
      if (err) throw err;
      cb(res);
    }
  );
};

exports.insertOne = (burgerName, cb) => {
  connection.query(
    "INSERT INTO burgers (burger_name) VALUES (?)",
    [burgerName],
    (err, res) => {
      if (err) throw err;
      cb(res);
    }
  );
};

exports.updateOne = (id, cb) => {
  connection.query(
    "UPDATE burgers SET devoured = true WHERE id = ?",
    [id],
    (err, res) => {
      if (err) throw err;
      cb(res);
    }
  );
};
