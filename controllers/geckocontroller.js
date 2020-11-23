const axios = require("axios");
const db = require("../models");
const { fetchCoinData } = require("../util/gecko-api.js");


module.exports = {
  findAll: function (req, res) {
    const { coin } = req.query;
    fetchCoinData(coin)
      .then((coinResponse) => {
        res.json(coinResponse.data)
      })
  }
};
