class GuessingGame {
  low = null;
  high = null;
  mid = null;

  constructor() {}

  setRange(min, max) {
    this.low = min;
    this.high = max;
  }

  guess() {
    this.mid = Math.round((this.low + this.high) / 2);
    return this.mid;
  }

  lower() {
    this.high = this.mid;
  }

  greater() {
    this.low = this.mid;
  }
}

module.exports = GuessingGame;
