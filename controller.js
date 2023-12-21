function onInputTotalBalanceHandler() {
  elTextTotal.value = checkEnteredNumber(elTextTotal.value);
}

function onClickAddTokenHandler() {
  const ctrl = elInputTextToken.value;
  if (checkToken(ctrl)) {
    renderToken(ctrl);
  }
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
  updateTokensAll();
  elInputTextToken.value = "";
}

function onClickTotalBalanceHandler() {
  model.setTotal(+elTextTotal.value);
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
}

function onInputEditHandler(e) {
  const value = checkEnteredNumber(e.target.value);
  const ctrl = e.target.getAttribute("ctrl");
  model.setValue(ctrl, value);
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
}
function onClickPlusButtonHandler(e) {
  const ctrl = e.target.getAttribute("ctrl");
  model.setPlus(ctrl);
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
}
function onClickMinusButtonHandler(e) {
  const ctrl = e.target.getAttribute("ctrl");
  model.setMinus(ctrl);
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
}
function oninputRangeHandler(e) {
  const ctrl = e.target.getAttribute("ctrl");
  model.setValue(ctrl, e.target.value);
  renderInputEdits();
  renderProgresses();
  renderInputRanges();
  renderCurrencyPrices();
}
function onClickCloseBlockHandler(e) {
  const elCloseButton = e.target.parentNode.parentNode;
  const ctrl = e.target.getAttribute("ctrl");
  model.removeToken(ctrl);
  removeBlock(elCloseButton);
}
function onClickShowModalHandler() {
  renderShowDialog();
}
function onClickHideModalHandler() {
  renderHideDialog();
}
