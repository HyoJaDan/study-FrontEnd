const inputed = document.querySelector("#login-form #input");
const inputedValue = document.querySelector("#login-form #input #inputValue");
const inputedBtn = document.querySelector("#login-form #input #inputBtn");
const inputedBtn2 = document.querySelector("#login-form #inputBtn2");
const h1 = document.querySelector("#login-form");

const USERNAME_KEY = "username";

function saveData(event) {
  event.preventDefault(); //어떤 event의 기본 행동이던지(페이지의 새로고침) 발생되지 않도록 한다
  const Data = inputedValue.value;
  localStorage.setItem(USERNAME_KEY, Data); //localStorage에 저장

  printData(Data);
}
function printData(Data) {
  inputedValue.classList.add("hidden");
  inputedBtn.classList.add("hidden");
  inputedBtn2.classList.add("shown");
  inputedBtn2.style.display = "inherit";
  const a = document.querySelector("#login-form #myName");
  const parent = a.parentElement;
  parent.removeChild(a);

  const newDiv = document.createElement("div");
  newDiv.innerText = `${Data}`;
  newDiv.setAttribute("id", "myName");

  if (Data.length <= 16) {
    newDiv.style.fontSize = "150px";
  } else {
    newDiv.style.fontSize = "100px";
  }
  h1.insertBefore(newDiv, inputed);
  /*<i class="font-roboto">.</i>*/
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  //만약 이름이 적혀있지 않을 때
  inputed.addEventListener("submit", saveData); //2번째 문제 값이 저장이 안되는 문제를 해결
} else {
  printData(savedUserName);
}
