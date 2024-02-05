class Player {
  readonly first: string;
  readonly last: string;
  private score: number = 0;
  constructor(first: string, last: string) {
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
