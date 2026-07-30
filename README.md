# Expense Tracker

A full-stack Expense Tracker web application built using the MERN Stack. The application helps users manage their personal finances by tracking income, expenses, monthly budgets, and spending analytics.

This project was built to strengthen my full-stack development skills and understand how a real-world MERN application is designed, developed, and connected from frontend to backend.

---

# Features

## User Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

---

## Dashboard

The dashboard provides a quick overview of the user's financial status.

It displays:

- Total Income
- Total Expenses
- Total Savings
- Monthly Budget
- Remaining Budget

The dashboard also includes:

- Expense Bar Chart
- Recent Transactions
- Responsive Summary Cards
- Skeleton Loading while data is being fetched

---

## Transaction Management

Users can manage all their financial transactions.

### Add Transaction

Users can add:

- Title
- Amount
- Transaction Type (Income / Expense)
- Category
- Date

### View Transactions

Displays all transactions in a table.

### Delete Transaction

Transactions can be deleted whenever required.

### Search & Filters

Users can filter transactions by:

- Transaction Type
- Category
- Month
- Year

Users can also search transactions by title.

---

## Monthly Budget

Users can:

- Set Monthly Budget
- Update Existing Budget
- View Remaining Budget
- View Total Expenses
- Track Monthly Spending

Each user can have one budget per month.

---

## Analytics

The application provides visual analytics using charts to help users understand spending patterns.

---

## Responsive Design

The application is fully responsive and works on:

- Desktop
- Tablet
- Mobile Devices

---

# Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3
- Font Awesome
- Recharts

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

# 📂 Project Structure

```
Expense Tracker
│
├── client
├── server
└── README.md
```

---

# Authentication

Authentication is implemented using JSON Web Tokens (JWT).

After successful login:

- JWT Token is generated
- Token is stored in Local Storage
- Axios Interceptor automatically sends the token with every protected request
- Protected routes verify the token before allowing access

Passwords are securely hashed using bcrypt before storing them in MongoDB.

---

# Database

MongoDB stores:

- Users
- Transactions
- Monthly Budgets

Mongoose is used to define schemas and interact with the database.

---

# Charts

The dashboard uses Recharts to visualize expense data with interactive charts.

---

# UI Features

- Modern UI
- Responsive Layout
- Skeleton Loading
- Cards
- Tables
- Modal Forms
- Clean Navigation
- Gradient Landing Page

---

# ⚡ Installation

## Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
```

---

## Install Backend Dependencies

```bash
cd server
npm install
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
npm run dev
```
---
# 👨‍💻 Author

**Shubham Gangne**

GitHub:
https://github.com/shubham925-stack

---

## If you found this project useful, consider giving it a star!