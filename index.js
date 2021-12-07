const express = require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute =  require("../api/routes/users");
const authRoute =  require("../api/routes/auth");
const productRoute =  require("../api/routes/product");

dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
).then(() => console.log("DB connection successful!!"))
  .catch((err)=> {
    console.log(err);
})


app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!")
})