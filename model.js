const model = {
  total: 0,
  tokens: [
    {
      caption: "eth",
      price: 0,
      volume: 0,
      count: 0,
      rangeMaximum: 0,
    },
    {
      caption: "btc",
      price: 0,
      volume: 0,
      count: 0,
      rangeMaximum: 0,
    },
    {
      caption: "ltc",
      price: 0,
      volume: 0,
      count: 0,
      rangeMaximum: 0,
    },
    {
      caption: "doge",
      price: 0,
      volume: 0,
      count: 0,
      rangeMaximum: 0,
    },
  ],

  addToken(tokenName) {
    if (this.isTokenExist(tokenName)) {
      console.log("a token already exists");
    } else {
      console.log("new token added");
      this.tokens.push({
        caption: tokenName,
        price: 0,
        volume: 0,
        count: 0,
        rangeMaximum: 0,
      });
      const firstToken = this.tokens[0].caption;
      const firstVolume = this.tokens[0].volume;
      this.setValue(firstToken, firstVolume);
    }
  },

  removeToken(tokenName) {
    this.tokens = this.tokens.filter((token) => token.caption !== tokenName);
  },

  isTokenExist(tokenName) {
    return !!this.tokens.find((token) => token.caption === tokenName);
  },

  checkValueLimit(tokenName, value) {
    const max = this.tokens.find((token) => {
      return token.caption === tokenName;
    }).rangeMaximum;
    if (value < 0) {
      return 0;
    }
    if (value > max) {
      return max;
    }
    return value;
  },

  setTotal(total) {
    this.total = +total;
    this.tokens.forEach((token) => {
      token.rangeMaximum = this.total;
      this.setValue(token.caption, 0);
    });
  },

  setPlus(tokenName) {
    const curToken = this.tokens.find((token) => token.caption === tokenName);
    this.setValue(tokenName, curToken.volume + 1);
    this.convertValues(tokenName);
  },

  setMinus(tokenName) {
    const curToken = this.tokens.find((token) => token.caption === tokenName);
    this.setValue(tokenName, curToken.volume - 1);
    this.convertValues(tokenName);
  },

  setValue(tokenName, value) {
    const curToken = this.tokens.find((token) => token.caption === tokenName);
    if (curToken) {
      curToken.volume = this.checkValueLimit(tokenName, +value);
      this.tokens.forEach((token) => {
        token.rangeMaximum = this.total - this.sumValues() + token.volume;
      });
      this.convertValues(tokenName);
    }
  },

  sumValues() {
    let sum = 0;
    this.tokens.forEach((token) => {
      sum += token.volume;
    });
    return sum;
  },

  setTokenPrice(tokenName, tokenPrice) {
    this.tokens.find((token) => token.caption === tokenName).price = tokenPrice;
  },

  convertValues(tokenName) {
    const curToken = this.tokens.find((token) => token.caption === tokenName);
    if (curToken.price !== 0) {
      curToken.count = curToken.volume / curToken.price;
    } else {
      curToken.count = 0;
    }
  },

  updateTokenPrice(tokenName, cbSuccess, cbFail) {
    fetchCurrency(tokenName)
      .then((tokenPrice) => {
        if (tokenPrice) {
          cbSuccess(tokenName, tokenPrice);
        } else {
          cbFail("token not exist");
        }
      })
      .catch((error) => {
        cbFail(error);
        console.log("error", error);
      });
  },
  getTokenByField(tokenName, fieldName) {
    return this.tokens.find((token) => token.caption === tokenName)[fieldName];
  },
};