const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");
const userRoutes = require("./router/user/user");
const contractRoutes = require("./router/contract/contract");
const { errorHandler } = require("./Middleware/errorMiddleware");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/contract", contractRoutes);

app.use(errorHandler);

app.listen(5000, () => {
  console.log("runnnig");
});
