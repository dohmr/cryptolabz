const axios = require("axios");
const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    const { coin } = req.query;
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${coin}&fq=news_desk:("Technology")&api-key=lU66tK2mcqRTMhFM6ciYOjCouBTEw6mb`)
      .then((articleResponse) => {
        res.json(articleResponse.data)
      })



  }
};