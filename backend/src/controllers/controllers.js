const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: " ",
  database: "budget",
  port: "5432",
});

// INSERT
const createExpense = async (req, res) => {
  const { concept, ammount, date, expenseType } = req.body;
  const response = await pool.query(
    "INSERT INTO expense (type, date, ammount, concept) VALUES ($1, $2, $3, $4)",
    [expenseType, date, ammount, concept]
  );
  console.log(response);
  res.json({
    message: "Expense Added Succesfully",
    body: {
      expense: { date, expenseType, concept, ammount, date },
    },
  });
};

// SELECT
const getExpense = async (req, res) => {
  const response = await pool.query("SELECT * FROM expense");
  res.json(response.rows);
  // res.status(200)
};

const getLastTen = async (req, res) => {
  const response = await pool.query("SELECT * FROM expense ORDER BY date DESC limit 10");
  res.json(response.rows);
  // res.status(200)
};

const getExpenseIn = async (req, res) => {
  const response = await pool.query("SELECT * FROM expense where type='ingreso'");
  res.json(response.rows);
  // res.status(200)
};

const getExpenseOut = async (req, res) => {
  const response = await pool.query("SELECT * FROM expense where type='egreso'");
  res.json(response.rows);
  // res.status(200)
};

const getExpenseById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM expense WHERE id = $1", [
    id,
  ]);
  res.json(response.rows);
};

// UPDATE
const changeExpenseById = async (req, res) => {
  const id = req.params.id;
  const { concept, ammount, date } = req.body;
  const response = await pool.query(
    "UPDATE expense SET concept = $1, ammount = $2, date = $3 WHERE id = $4",
    [concept, ammount, date, id]
  );
  res.send(`Expense ${id} updated`);
  console.log(response);
};

// DELETE
const deleteExpenseById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM expense WHERE id = $1", [id]);
  res.send(`Expense ${id} deleted`);
  console.log(response);
};

module.exports = {
  createExpense,
  getExpense,
  getLastTen,
  getExpenseIn,
  getExpenseOut,
  getExpenseById,
  changeExpenseById,
  deleteExpenseById,
};
