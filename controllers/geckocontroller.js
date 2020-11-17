const axios = require("axios");
const db = require("../models");

// Defining methods for the geckoController

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=

// findAll searches the Gecko Coins API and returns only the entries we haven't already saved


module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios.get("https://api.coingecko.com/api/v3/coins", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiCoins =>
        db.Coin.find().then(dbCoins =>
          apiCoins.filter(apiCoin =>
            dbCoins.every(dbCoin => dbCoin.Id.toString() !== apiCoin.id)
          )
        )
      )
      .then(coins => res.json(coins))
      .catch(err => res.status(422).json(err));
  }
};