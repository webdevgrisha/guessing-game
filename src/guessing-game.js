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
    this.mid = Math.floor((this.low + this.high) / 2);
    return this.mid;
  }

  lower() {
    this.high = this.mid - 1;
  }

  greater() {
    this.low = this.mid + 1;
  }
}

module.exports = GuessingGame;
