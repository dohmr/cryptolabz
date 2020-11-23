const axios = require("axios");
const db = require("../models");
const { fetchCoinData } = require("../util/gecko-api.js");


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=


module.exports = {
  findAll: function (req, res) {
    const { coin } = req.query;
    fetchCoinData(coin)
      .then((coinResponse) => {
        res.json(coinResponse.data)
      })
  }
};
