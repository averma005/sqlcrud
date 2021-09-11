const express = require("express");
const app = express();
const { final } = require("./model/database");
const sequelize = require("./config");
const mysql = require("mysql");
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to databse");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("connected");
});
