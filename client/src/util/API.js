import axios from "axios";



const findCoins = (query) =>
    axios.get(`/api/search/coin/?coin=${query}`);


// DB calls

// Gets all coins
const getCoins = () =>
    axios.get("/api/coins");

// Gets the coin with the given id
const getCoin = (id) =>
    axios.get("/api/coins/" + id);

// Deletes the coin with the given id
const deleteCoin = (id) =>
    axios.delete("/api/coins/" + id);

// Saves a coin to the database
const saveCoin = (coinData) =>
    axios.post("/api/coins", coinData);


const getArticle = (article) => {
    console.log(article)
    return axios.get(`/api/search/article/?search=${article}`)

}


// example api request for protected data (sends error i user isn't logged in)

const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const API = { getArticle, findCoins, getCoin, getCoins, deleteCoin, saveCoin, getProtectedExample, getPublicExample };

export default API;
// one default export per module.
