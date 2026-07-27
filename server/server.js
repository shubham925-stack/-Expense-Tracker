const express = require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db")
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/analytics", analyticsRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});