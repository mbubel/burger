const orm = require("../config/orm");

exports.createBurger = (burgerName) => {
  orm.insertOne(burgerName);
};

exports.findAll = () => {
  return orm.selectAll();
};

exports.devour = (id) => {
  return orm.updateOne(id);
};
