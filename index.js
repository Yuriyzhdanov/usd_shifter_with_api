const elTextTotal = document.querySelector("#total_balance");
const elButtonTotal = document.querySelector('input[type="button"]');
const elInputEdits = document.querySelectorAll(".shifter > .row > input");
const elPlusButtons = document.querySelectorAll('button[action="plus"]');
const elMinusButtons = document.querySelectorAll('button[action="minus"]');
const elInputRanges = document.querySelectorAll('input[type="range"]');
const elInputTextToken = document.querySelector("#addToken");
const elButtonAddToken = document.querySelector("#addTokenBtn");
const elCloseBtns = document.querySelectorAll("#closeBtn");
const showModalBtn = document.getElementById("show-modal-btn");
const hideModalBtn = document.getElementById("hide-modal-btn");
const elModalContent = document.querySelector(".modal-content");

elButtonAddToken.onclick = onClickAddTokenHandler;
elTextTotal.oninput = onInputTotalBalanceHandler;
elButtonTotal.onclick = onClickTotalBalanceHandler;
showModalBtn.onclick = onClickShowModalHandler;
hideModalBtn.onclick = onClickHideModalHandler;

elInputEdits.forEach((elInputEdit) => {
  elInputEdit.oninput = onInputEditHandler;
});
elPlusButtons.forEach((elPlusButton) => {
  elPlusButton.onclick = onClickPlusButtonHandler;
});
elMinusButtons.forEach((elMinusButton) => {
  elMinusButton.onclick = onClickMinusButtonHandler;
});
elInputRanges.forEach((elInputRange) => {
  elInputRange.oninput = oninputRangeHandler;
});
elCloseBtns.forEach((elCloseBtn) => {
  elCloseBtn.onclick = onClickCloseBlockHandler;
});


