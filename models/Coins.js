const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({

  name: { type: String, required: true },
  symbol: { type: String, required: true },
  image: { type: String },
  update: { type: Date },
  date: { type: Date, default: Date.now }
});

const Coins = mongoose.model("Coin", coinSchema);

module.exports = Coins;
