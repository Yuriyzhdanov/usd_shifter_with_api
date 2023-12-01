const model = {
  total: 0,
  values: {
    btc: 0,
    eth: 0,
    ltc: 0,
    doge: 0,
  },
  maximums: {
    btc: 0,
    eth: 0,
    ltc: 0,
    doge: 0,
  },
  convertedValues: {
    btc: 0,
    eth: 0,
    ltc: 0,
    doge: 0,
  },
  currency: {
    btc: 0,
    eth: 0,
    ltc: 0,
    doge: 0,
  },
  addToken(ctrl) {
    if(this.isTokenExist(ctrl)){
      console.log('такой токен уже существует');
    } else {
      console.log('добавляю новый');
      this.maximums[ctrl] = 0;
      this.values[ctrl] = 0;
      this.currency[ctrl] = 0;
      this.convertValues(ctrl);
    }
  },
  isTokenExist(ctrl) {
    return ctrl in this.values;
  },
  removeToken(ctrl) {
    delete this.values[ctrl];
    delete this.maximums[ctrl];
    delete this.currency[ctrl];
    delete this.convertedValues[ctrl];

  },
  checkValueLimit(ctrl, value) {
    if (value < 0) {
      return 0;
    }
    if (value > this.maximums[ctrl]) {
      return this.maximums[ctrl];
    }
    return value;
  },
  setTotal(total) {
    total = +total;
    this.total = total;
    for (const key in this.maximums) {
      this.setMax(key, total);
      this.setValue(key, 0);
    }
  },
  setMax(ctrl, max) {
    max = +max;
    this.maximums[ctrl] = max;
  },
  setPlus(ctrl) {
    this.setValue(ctrl, this.values[ctrl] + 1);
  },
  setMinus(ctrl) {
    this.setValue(ctrl, this.values[ctrl] - 1);
  },
  setValue(ctrl, value) {
    value = +value;
    this.values[ctrl] = this.checkValueLimit(ctrl, value);
    for (const key in this.maximums) {
      this.maximums[key] = this.total - this.sumValues() + this.values[key];
    }
    this.convertValues(ctrl);
  },
  setCurrencyPrice(tokenName, currencyPrice) {
    this.currency[tokenName] = currencyPrice;
  },
  convertValues(ctrl) {
    const currencyValue = this.currency[ctrl];
    if (currencyValue !== 0) {
      this.convertedValues[ctrl] = this.values[ctrl] / currencyValue;
    } else {
      this.convertedValues[ctrl] = 0;
    }
  },
  sumValues() {
    let sum = 0;
    for (const key in this.values) {
      sum += this.values[key];
    }
    return sum;
  },

};

function checkEnteredNumber(str) {
  return parseInt(str) || 0;
}


