const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");

const port = 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./routes/index"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
