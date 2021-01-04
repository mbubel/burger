let connection = require("./connection");

exports.selectAll = () => {
  connection.query(
    "SELECT id, burger_name, devoured from burgers",
    (err, res) => {
      if (err) throw err;
      return res;
    }
  );
};

exports.insertOne = (burgerName) => {
  connection.query(
    "INSERT INTO burgers (burger_name) VALUES (?)",
    [burgerName],
    (err, res) => {
      if (err) throw err;
      return res;
    }
  );
};

exports.updateOne = (id) => {
  connection.query(
    "UPDATE burgers SET devoured = true WHERE id = ?",
    [id],
    (err, res) => {
      if (err) throw err;
      return res;
    }
  );
};
