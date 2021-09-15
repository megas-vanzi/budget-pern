const { Router } = require("express");
const router = Router();

const {
  createExpense,
  getExpense,
  getExpenseById,
  changeExpenseById,
  deleteExpenseById,
} = require("../controllers/index.controller");

router.post("/expense", createExpense);
router.get("/expense", getExpense);
router.get("/expense/:id", getExpenseById);
router.put("/expense/:id", changeExpenseById);
router.delete("/expense/:id", deleteExpenseById);

module.exports = router;
