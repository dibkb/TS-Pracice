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
// const james = new Player("James", "Ronald");
function getRandom<T>(input: T[]): T {
  const idx = Math.floor(Math.random() * input.length);
  return input[idx];
}
const arr = [1, 2, 3, 4, 5, 6];
getRandom<number>(arr);
