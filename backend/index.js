require("./conn/mongo");
const express = require("express");
const app = express();
const port = 5000;

app.get("/path", (req, res) => {
  res.send("YOUR TEXT HERE");
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
