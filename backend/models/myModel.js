const mongoose = require("mongoose");

const healthSchema = mongoose.Schema({
  address: String,
  tags: Array,
});

const HealthData = mongoose.model("HealthData", healthSchema);
module.exports = { HealthData };
