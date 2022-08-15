const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Material database" });
});

//Routes
app.use(errorHandler);

app.use("/api/materials", require("./routes/materialRoutes"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.brightMagenta.underline);
});
