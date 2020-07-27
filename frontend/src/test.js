class Test {
    constructor(name) {
        this.total = 0
        this.name = name;
        this.testIndex;
    }
}

Test.prototype.retrieveTestIndex = function() {
    return this.name[this.testIndex]
}

Test.prototype.isEnded = function() {
    return this.testIndex === this.test.length
}