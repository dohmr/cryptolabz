import axios from "axios";



// findCoins: function() {
//     return axios.get("https://api.coingecko.com/api/v3/coins/list");
//   },

// DB calls

// Gets all coins
getCoins: function() {
    return axios.get("/api/coins");
},
// Gets the book with the given id
getCoin: function(id) {
    return axios.get("/api/coins/" + id);
},
// Deletes the coin with the given id
deleteCoin: function(id) {
    return axios.delete("/api/coins/" + id);
},
// Saves a coin to the database
saveCoin: function(coinData) {
    return axios.post("/api/coins", coinData);
}



// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const API = { getProtectedExample, getPublicExample };

export default API;
// one default export per module. 
