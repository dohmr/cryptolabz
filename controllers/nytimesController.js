const axios = require("axios");
const db = require("../models");
const API_KEY = process.env.API_KEY




module.exports = {
  findAll: function (req, res) {
    const { coin } = req.query;
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${coin}&fq=news_desk:("Technology")&fq=headline&api-key=${API_KEY}`)
      .then((articleResponse) => {
        res.json(articleResponse.data)
      })



  }
};