const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors());

app.use("/", router);
// app.get("/users", (req, res) => {});
// app.post("/users", (req, res) => {});

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log("Hello");
});
