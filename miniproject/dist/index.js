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
const james = new Player("James", "Ronald");
