const db = require("../models");
const { fetchCoinData } = require("../util/gecko-api.js");

const findAllFavcoins = async (req, res) => {
  try {
    const { favcoins } = await db.User.findById(req.user.id);

    // get market data from gecko api if url contains ?include_data=true
    if (req.query.include_data === "true") {
      const ids = favcoins.join(",");
      const { data } = await fetchCoinData(ids);
      res.json(data);
    } else {
      res.json({ favcoins })
    }
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};

// add coin to favcoins
const addFavcoin = async (req, res) => {
  try {
    const user = await db.User.findById(req.user.id);
    user.favcoins.push(req.body.coinId);
    await user.save();
    res.json({ favcoins: user.favcoins });
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}

module.exports = { findAllFavcoins, addFavcoin }
