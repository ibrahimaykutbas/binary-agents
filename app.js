const agentForm = document.querySelector("#agent-form");
const codeInput = document.querySelector("#code");
const codeList = document.querySelector(".list-group");
const cardBody = document.querySelector(".card-body");

eventListener();

function eventListener() {
  agentForm.addEventListener("submit", getCode);
}

function getCode(e) {
  const code = codeInput.value.toString();
  const result = binaryAgent(code);

  addCodeToUI(result);

  e.preventDefault();
}

function addCodeToUI(code) {
  const text = document.createElement("h5");
  text.className = "card-title";
  text.id = "tasks-title";
  text.textContent = "Result";

  codeList.appendChild(text);

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";

  listItem.appendChild(document.createTextNode(code));

  codeList.appendChild(listItem);

  codeInput.value = "";
}

function binaryAgent(str) {
  let biString = str.split(" ");
  let uniString = [];

  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}
