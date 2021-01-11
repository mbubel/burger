const orm = require("../config/orm");

exports.createBurger = (burgerName, cb) => {
  orm.insertOne(burgerName, cb);
};

exports.findAll = (cb) => {
  orm.selectAll(cb);
};

exports.devour = (id, cb) => {
  orm.updateOne(id, cb);
};
