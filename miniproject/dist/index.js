"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    get getfirst() {
        return this.first;
    }
    get getlast() {
        return this.last;
    }
}
// const james = new Player("James", "Ronald");
function getRandom(input) {
    const idx = Math.floor(Math.random() * input.length);
    return input[idx];
}
const arr = [1, 2, 3, 4, 5, 6];
getRandom(arr);
