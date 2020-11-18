const axios = require("axios");
const db = require("../models");


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=


module.exports = {
  findAll: function (req, res) {
    const { coin } = req.query;
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`)
      .then((coinResponse) => {
        res.json(coinResponse.data)
      })



  }
};