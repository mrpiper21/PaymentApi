const ApiData = () => {
  fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USDT", {
    headers: {
      "X-CoinAPI-Key": "2AA8FF81-9AC3-41D8-9FFF-26ACE0AB11AF", // Replace with your API key
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export default ApiData;
