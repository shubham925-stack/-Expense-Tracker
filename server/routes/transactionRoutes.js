const express=require("express");
const router = express.Router();
const {protect}=require("../middleware/authMiddleware");

const{
    addTransaction,
    getAllTransactions,
    updateTransaction,
    deleteTransaction
}=require("../controllers/transactionController")

router.post("/", protect, addTransaction);
router.get("/", protect, getAllTransactions);
router.put("/:id", protect, updateTransaction);
router.delete("/:id", protect, deleteTransaction);
module.exports = router;