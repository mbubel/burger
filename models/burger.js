const orm = require("../config/orm");

exports.createBurger = (burgerName) => {
  orm.insertOne(burgerName);
};

exports.findAll = (cb) => {
  orm.selectAll(cb);
};

exports.devour = (id) => {
  return orm.updateOne(id);
};
