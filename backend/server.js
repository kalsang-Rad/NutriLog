require("dotenv").config();

// packages
const express = require("express");
const { default: mongoose } = require("mongoose");
const dietRoutes = require("./routes/dietRoutes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/diets", dietRoutes);

// connect to db
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening on requests on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
