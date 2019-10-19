class GuessingGame {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round(this.min + (this.max - this.min) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
