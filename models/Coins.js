const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({

  name: { type: String, required: true },
  symbol: { type: String, required: false },
  image: { type: String },
  update: { type: Date },
  date: { type: Date, default: Date.now },
  day: {type: Number, required: true },
  week: {type: Number, required: true },
  price: {type: Number, required: true }
});

const Coins = mongoose.model("Coin", coinSchema);

module.exports = Coins;
