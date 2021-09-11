const Sequelize = require("sequelize");
// const sequelize = new Sequelize({
//   host: "31.170.161.98",
//   dialect: "mysql",
//   logging: console.log,
//   pool: {
//     max: 5,
//     min: 0,
//   },
// });

module.exports = new Sequelize("practice", "postgres", "root", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
