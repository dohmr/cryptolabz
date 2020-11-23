const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({

  name: { type: String, required: true },
  symbol: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  update: { type: Date },
  date: { type: Date, default: Date.now },
  day: {type: Number, required: true },
  week: {type: Number, required: true },
  price: {type: Number, required: true }
});

const Coins = mongoose.model("Coin", coinSchema);

module.exports = Coins;
