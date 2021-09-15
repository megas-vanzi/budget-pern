const express = require("express");
const app = express();

const port = 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./src/routes/index"));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
