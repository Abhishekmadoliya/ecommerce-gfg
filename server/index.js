const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const app = express();
const listingRoutes = require("./routes/listingroutes");
const cors = require("cors");
const mongoose = require("mongoose");
// const { default: userController } = require('./controllers/userController');
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

async function Db_connect() {
    await mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("db connected"))
    .catch((e) => console.log("error in db connection", e));
}

Db_connect();

app.get("/", (req, res) => {
  res.send("hello world");
});
// used in client : ecommerce
app.use("/listings", listingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
