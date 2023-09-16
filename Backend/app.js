const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/user", userRoute);
app.use("/auth", authRoute);

mongoose
  .connect("mongodb://0.0.0.0:27017/Login")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Error....", err));

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Login App" });
});

app.listen(PORT, () => {
  console.log(`Server Running on  http://localhost:${PORT}`);
});
