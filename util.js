function checkEnteredNumber(str) {
  return parseInt(str) || 0;
}

function checkToken(tokenName) {
  if (tokenName.length < 3) {
    renderModalSmallTokenName();
  } else if (model.isTokenExist(tokenName)) {
    renderModalAlreadyExsist();
  } else {
    model.addToken(tokenName);
    renderToken(tokenName);
    console.log('checkToken work');
  }
}