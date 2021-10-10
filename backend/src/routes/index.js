const { Router } = require("express");
const router = Router();

const {
  createExpense,
  getExpense,
  getLastTen,
  getExpenseIn,
  getExpenseOut,
  getExpenseById,
  changeExpenseById,
  deleteExpenseById,
} = require("../controllers/controllers");

router.post("/expense", createExpense);
router.get("/expense", getExpense);
router.get("/expenseLastTen", getLastTen);
router.get("/expenseIn", getExpenseIn);
router.get("/expenseOut", getExpenseOut);
router.get("/expense/:id", getExpenseById);
router.put("/expense/:id", changeExpenseById);
router.delete("/expense/:id", deleteExpenseById);

module.exports = router;
