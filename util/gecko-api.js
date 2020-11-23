const axios = reqire("axios");

const fetchCoinData = (ids) => {
  return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`);
}

module.exports= { fetchCoinData }
