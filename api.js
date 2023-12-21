const API_URL = "https://min-api.cryptocompare.com/data";

async function sendRequest(url, callback) {
  const resp = await fetch(url);
  const json = await resp.json();
  return callback(json);
}

  async function fetchCurrency(tokenName) {
  const URL = `${API_URL}/price?fsym=${tokenName}&tsyms=USD`;
  return sendRequest(URL, (data) => data.USD)}

    // fetchCurrency('qqq')
    //   .then((result)=> {
    //     console.log('result', result)
    //   })
    
    