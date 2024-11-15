const inputBox = document.getElementById("inputBox");
const listBox = document.getElementById("listBox");

function addList() {
  if (inputBox.value === "") {
    alert("Boş bırakılmaz!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listBox.innerHTML);
}

function showList(){
    listBox,innerHTML=localStorage.getItem("data");
}
showList();
