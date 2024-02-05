"use strict";
const button = document.getElementById("btn");
const input = document.getElementById("input-text");
const form = document.querySelector("form");
const unorderedList = document.getElementById("ul");
const addLi = (li) => {
    unorderedList.append(li);
};
const formSubmitHandler = (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    if (input.value.length) {
        li.innerHTML = input.value;
        addLi(li);
        input.value = "";
    }
};
form.addEventListener("submit", formSubmitHandler);
