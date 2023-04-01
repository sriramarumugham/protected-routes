const express = require("express");
const db = require("./config/mongoose");
const dotenv = require("dotenv");
const cors=require('cors');

dotenv.config();

const app = express();
app.use(cors());

db();


app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Api runnig");
});

app.use("/", require("./routes/index"));

app.listen(8000, () => {
  console.log("expres app runnig on port ", 8000);
});
