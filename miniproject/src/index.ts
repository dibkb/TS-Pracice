const button = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("input-text")! as HTMLInputElement;
const form = document.querySelector("form")!;
const unorderedList = document.getElementById("ul")! as HTMLUListElement;
const addLi = (li: HTMLLIElement) => {
  unorderedList.append(li);
};
const formSubmitHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const li = document.createElement("li");
  if (input.value.length) {
    li.innerHTML = input.value;
    addLi(li);
    input.value = "";
  }
};
form.addEventListener("submit", formSubmitHandler);
