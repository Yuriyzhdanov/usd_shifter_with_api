const API_URL = "https://min-api.cryptocompare.com/data";

async function sendRequest(url, callback) {
  const resp = await fetch(url);
    const json = await resp.json();
    return callback(json);
} 
async function fetchCurrency(tokenName) {
  const URL = `${API_URL}/price?fsym=${tokenName}&tsyms=USD`;
  return sendRequest(URL, (data) => data.USD);
}
function successToken(tokenName, tokenPrice) {
  if(tokenPrice){
    model.setCurrencyPrice(tokenName, tokenPrice);
  }else{
    renderModalNotFound()
    return 
  }
}
function failToken(){
  renderModalNetworkError()
}
function addFetchForToken(tokenName) {
  checkTokenName(tokenName) &&
  fetchCurrency(tokenName)
  .then((tokenPrice) => successToken(tokenName, tokenPrice))
  .catch(failToken);
}
function checkTokenName(tokenName){
  if(tokenName.length > 2){
    renderToken(tokenName)
  }else{
    renderModalSmallTokenName()
  }
}
