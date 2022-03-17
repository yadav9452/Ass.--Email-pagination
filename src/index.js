const express = require("express");
const usercontroller = require("./controllers/user.controller");
// const admincontroller = require("./controllers/admin.controller");
const transporter = require("./configs/mail");

const app = express();

app.use(express.json());

app.use("/users", usercontroller);
// app.use("/admins", admincontroller);

module.exports = app;