const express = require('express');
const path = require("node:path");
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000; // 8000 is the fallback port number for my app

// Routes
const indexRouter = require("./routes/index");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});