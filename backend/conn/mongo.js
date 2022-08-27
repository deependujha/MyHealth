require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://team_garuda:${process.env.ATLAS_PASSWORD}@cluster0.zpemx5c.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
