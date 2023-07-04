const express = require("express");
const app = express();
// const dietRoutes = require("./routes/dietRoutes")
const { default: mongoose } = require("mongoose");

app.use(express.json());

// app.use("/api/diets", dietRoutes);
