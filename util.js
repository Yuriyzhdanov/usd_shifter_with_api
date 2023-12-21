function checkEnteredNumber(str) {
  return parseInt(str) || 0;
}

function checkToken(tokenName) {
  if (tokenName.length < 3) {
    renderModalSmallTokenName();
    return false;
  } else if (model.isTokenExist(tokenName)) {
    renderModalAlreadyExsist();
    return false;
  } else {
    return true;
  }
}
