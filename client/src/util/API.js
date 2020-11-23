import axios from "axios";

// DB calls
const getFavcoins = (includeMarketData) => {
    return axios.get(`/api/favcoins?include_data=${includeMarketData}`);
}

const saveFavcoin = (coinId) => {
    return axios.post("/api/favcoins", { coinId })
}


const getCoins = () =>
axios.get("/api/coins");


const getCoin = (id) =>
axios.get("/api/coins/" + id);


const deleteCoin = (id) =>
axios.delete("/api/coins/" + id);

const saveCoin = (coinData) =>
axios.post("/api/coins", coinData);

// API calls
const findCoins = (query) =>
    axios.get(`/api/search/coin/?coin=${query}`);
    
// Get articles from API
const getArticle = (article) => {
    console.log(article)
    return axios.get(`/api/search/article/?search=${article}`)

}

const getProtectedExample = () => axios.get("/api/protected");

const getPublicExample = () => axios.get("/api/unprotected");

const API = { getArticle, getFavcoins, saveFavcoin, findCoins, getCoin, getCoins, deleteCoin, saveCoin, getProtectedExample, getPublicExample };

export default API;

