function onInputTotalBalanceHandler() {
  elTextTotal.value = checkEnteredNumber(elTextTotal.value);
}

function onClickAddTokenHandler(e) {
    if (elInputTextToken.value.length > 2) {
      // model.addToken(elInputTextToken.value);
      const ctrl = elInputTextToken.value;
      renderInputEdits();
      renderProgresses();
      renderInputRanges();
      renderCurrencyPrices();
      addFetchForToken(ctrl);
      elInputTextToken.value = "";
  }
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
  removeBlock(elCloseButton);
  model.removeToken() /// дописать удаление 
}

function onClickShowModal() {
  renderShowDialog()
}

function onClickHideModal() {
  renderHideDialog()
}

// function onClickDialog(e) {
//   e.stopPropagation()
// }

// function onClickDocument() {
//   renderHideDialog()
// }