const input = document.getElementById("input");
const addBtn = document.getElementById("add");

const todoItem = document.getElementById("todoItem");

const completeBtn = document.getElementById("completed");

const deleteBtn = document.getElementById("deleteBtn");

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});
