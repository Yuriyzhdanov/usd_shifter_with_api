function renderInputEdit(elInputEdits) {
  const ctrl = elInputEdits.getAttribute("ctrl");
  elInputEdits.value = model.values[ctrl];
}

function renderProgress(elProgress) {
  const ctrl = elProgress.getAttribute("ctrl");
  elProgress.max = model.maximums[ctrl];
  elProgress.value = model.values[ctrl];
}

function renderInputRange(elRange) {
  const ctrl = elRange.getAttribute("ctrl");
  elRange.max = model.maximums[ctrl];
  elRange.value = model.values[ctrl];
}

function renderInputEdits() {
  const elInputEdits = document.querySelectorAll(".shifter > .row > input");
  elInputEdits.forEach(renderInputEdit);
}

function renderProgresses() {
  const elProgresses = document.querySelectorAll("progress");
  elProgresses.forEach(renderProgress);
}

function renderInputRanges() {
  const elInputRanges = document.querySelectorAll('input[type="range"]');
  elInputRanges.forEach(renderInputRange);
}

function generateBlock(ctrl) {
  const elInputEdit = document.querySelectorAll(".shifter > .row > input");

  const container = document.createElement("div");
  const elLabel = document.createElement("label");
  const elProgress1 = document.createElement("progress");
  const elRow = document.createElement("div");
  const elMinusButton = document.createElement("button");
  const elInput = document.createElement("input");
  const ElPlusButton = document.createElement("button");
  const elProgress2 = document.createElement("progress");
  const elRange = document.createElement("input");
  const elDiv = document.createElement("div");
  const elButton = document.createElement("button");
  const elDiv1 = document.createElement("div");
  const elSpan1 = document.createElement("span");
  const elSpan2 = document.createElement("span");

  elLabel.setAttribute("for", `edit-${ctrl}`);
  elProgress1.setAttribute("ctrl", ctrl);
  elProgress1.setAttribute("max", "0");
  elProgress1.setAttribute("value", "0");
  elMinusButton.setAttribute("ctrl", ctrl);
  elMinusButton.setAttribute("action", "minus");
  elInput.setAttribute("type", "text");
  elInput.setAttribute("ctrl", ctrl);
  elInput.setAttribute("name", `edit-${ctrl}`);
  elInput.setAttribute("id", `edit-${ctrl}`);
  elInput.setAttribute("value", '0');

  ElPlusButton.setAttribute("ctrl", ctrl);
  ElPlusButton.setAttribute("action", "plus");
  elProgress2.setAttribute("ctrl", ctrl);
  elProgress2.setAttribute("max", "0");
  elProgress2.setAttribute("value", "0");
  elRange.setAttribute("type", "range");
  elRange.setAttribute("ctrl", ctrl);
  elRange.setAttribute("name", ctrl);
  elRange.setAttribute("id", "");
  elRange.setAttribute("min", "0");
  elRange.setAttribute("max", "0");
  elRange.setAttribute("value", "0");
  elButton.setAttribute("id", "close");
  elButton.setAttribute("ctrl", ctrl);
  elSpan2.setAttribute("ctrl", ctrl);

  container.classList.add("shifter");
  elRow.classList.add("row");
  elDiv.classList.add("close");
  elDiv1.classList.add("field_currency");

  elLabel.textContent = "USD to " + ctrl.toUpperCase();
  elMinusButton.textContent = "<";
  ElPlusButton.textContent = ">";
  elButton.textContent = "x";
  elSpan1.textContent = ctrl.toUpperCase() + ":";

  container.appendChild(elDiv);
  container.appendChild(elLabel);
  container.appendChild(elProgress1);
  container.appendChild(elRow);
  container.appendChild(elProgress2);
  container.appendChild(elRange);
  container.appendChild(elDiv1);
  elRow.appendChild(elMinusButton);
  elRow.appendChild(elInput);
  elRow.appendChild(ElPlusButton);
  elDiv.appendChild(elButton);
  elDiv1.appendChild(elSpan1);
  elDiv1.appendChild(elSpan2);

  elRange.oninput = oninputRangeHandler;
  ElPlusButton.onclick = onClickPlusButtonHandler;
  elMinusButton.onclick = onClickMinusButtonHandler;
  elInputEdit.oninput = onInputEditHandler;
  elButton.onclick = onClickCloseBlockHandler;

  return container;
}

function renderToken(ctrl) {
  const bottomPave = document.querySelector(".bottom.pave");
  const newBlock = generateBlock(ctrl);
  bottomPave.appendChild(newBlock);
}

function renderCurrencyPrice(elCurrencyPrice) {
  const ctrl = elCurrencyPrice.getAttribute("ctrl");
  elCurrencyPrice.textContent = +model.convertedValues[ctrl].toPrecision(3)
}

function renderCurrencyPrices() {
  const elCurrencyPrices = document.querySelectorAll(".field_currency > span + span");
  elCurrencyPrices.forEach(renderCurrencyPrice);
}

function removeBlock(item) {
  item.remove();
}

function renderShowDialog() {
  const elDialog = document.querySelector('dialog')
  elDialog.showModal()
}
function renderHideDialog() {
  const elDialog = document.querySelector('dialog')
  elDialog.close()
}

function renderModalNotFound(){
  clearModalContent()
  const span = document.createElement('span')
  span.textContent = 'oops token is not found'
  elModalContent.appendChild(span)
  renderShowDialog()
}

function renderModalNetworkError(){
  clearModalContent()
  const span = document.createElement('span')
  span.textContent = 'network error'
  elModalContent.appendChild(span)
  renderShowDialog()
}

function renderModalAlreadyExsist(){
  clearModalContent()
  const span = document.createElement('span')
  span.textContent = 'this token already exists'
  elModalContent.appendChild(span)
  renderShowDialog()
}
function renderModalSmallTokenName(){
  clearModalContent()
  const span = document.createElement('span')
  span.textContent = 'please enter more characters for token'
  elModalContent.appendChild(span)
  renderShowDialog()
}

function clearModalContent() {
  elModalContent.textContent = ''
}

