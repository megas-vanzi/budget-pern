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
  try {
    const { concept, amount, date, expense } = req.body;
    const response = await pool.query(
      "INSERT INTO expense (type, date, amount, concept) VALUES ($1, $2, $3, $4)",
      [expense, date, amount, concept]
    );
    console.log(response);
    res.json({
      message: "Expense Added Succesfully",
      body: {
        operation: { expense, concept, amount, date },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// SELECT
const getExpense = async (req, res) => {
  const response = await pool.query("SELECT * FROM expense");
  res.json(response.rows);
  // res.status(200)
};

const getLastTen = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM expense ORDER BY date DESC limit 10"
  );
  res.json(response.rows);
  // res.status(200)
};

const getExpenseIn = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM expense where type='ingreso'"
  );
  res.json(response.rows);
  // res.status(200)
};

const getExpenseOut = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM expense where type='egreso'"
  );
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
  try {
    const id = req.params.id;
    const { concept, amount, date } = req.body;
    const response = await pool.query(
      "UPDATE expense SET concept = $1, amount = $2, date = $3 WHERE id_expense = $4",
      [concept, amount, date, id]
    );
    res.send(`Expense ${id} updated`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

// DELETE
const deleteExpenseById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "DELETE FROM expense WHERE id_expense = $1",
      [id]
    );
    res.send(`Expense ${id} deleted`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
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
