require("./conn/mongo");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;
const { HealthData } = require("./models/myModel");

app.use(cors());
app.use(express.json());

app.get("/path", (req, res) => {
  res.send("YOUR TEXT HERE");
});

app.get("/tagPresent/:tag", async (req, res) => {
  try {
    const result = await HealthData.find({ tags: { $in: req.params.tag } });
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get("/tagAbsent/:tag", async (req, res) => {
  try {
    const result = await HealthData.find({ tags: { $nin: req.params.tag } });
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.post("/tag", async (req, res) => {
  try {
    const usr = await HealthData.findOne({ address: req.body.addr });
    console.log(usr);
    if (usr) {
      let newData = usr.tags;
      newData.push(req.body.tag);
      const resData = await HealthData.findOneAndUpdate(
        { address: req.body.addr },
        { address: req.body.addr, tags: newData }
      );
      res.send("data updated");
    } else {
      let myTag = [];
      myTag.push(req.body.tag);
      const data = await HealthData({
        address: req.body.addr,
        tags: myTag,
      });

      await data.save();
      res.send("data saved");
    }
  } catch (err) {
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
