const sequelize = require("sequelize");

const db = require("../config");

const practice = db.define(pratices, {
  id: {
    type: sequelize.INTEGER,
  },
  name: {
    type: sequelize.STRING,
  },
  rollnumber: {
    type: sequelize.INTEGER,
  },
});

const final = practice.sync().then(console.log("table created"));

module.exports = { final };
