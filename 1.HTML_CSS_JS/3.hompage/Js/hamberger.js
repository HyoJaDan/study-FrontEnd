$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});
/*
const hamburger=document.querySelector(".hamburger");
hamburger.onclicked()
{
  hamburger.classList.add("is-active")
}
*/
const ham4 = document.querySelector("#hamburger-4");
const mainClock = document.querySelector("#main-clock");

const ham6 = document.querySelector("#hamburger-6");
const inputForm = document.querySelector("#login-form");
const mainForm = document.querySelector("#main-form");
const usernameOut = document.querySelector("#saved-username");
const returnBtn = document.querySelector(".fa-undo");

var n = 0;
function clickHam6() {
  inputForm.classList.add("hiddenDown"); //inputForm 이 올라간다
  mainForm.classList.add("shownDown"); //mainForm이 천천히 올라가게 만듬
  mainForm.style.margin = "0 auto"; //mainForm이 올라가게 만듬

  mainForm.classList.remove("hiddenUp");
  inputForm.classList.remove("shownUp");

  var a = localStorage.getItem(USERNAME_KEY);
  if (a.length > 6) {
    usernameOut.classList.add("IfUNBig");
  }
  usernameOut.innerText = a;
  if (n === 1) {
    returnBtn.classList.toggle("fade-outAndFa-spin");
  } else {
    returnBtn.style = "display:block";
  }
  n = 1;
  returnBtn.classList.toggle("fade-in");
}

function clickReturnBtn() {
  mainForm.classList.add("hiddenUp");
  mainForm.classList.remove("shownDown"); //안먹힘1

  inputForm.classList.add("shownUp"); //위에 다시 보이게 만듦2
  inputForm.classList.remove("hiddenDown"); //내려옴2
  ///////////////////////////////////////////////////

  returnBtn.classList.toggle("fade-outAndFa-spin");
  returnBtn.classList.toggle("fade-in");
  $(ham6).toggleClass("is-active");
}
const bbb = document.querySelector("#whileGoClock");
function clickHam4() {
  inputForm.classList.add("hiddenRight"); //inputForm 이 오른쪽으로 감

  bbb.classList.add("hiddenFast"); //mainForm이 천천히 오른쪽으로 가게 만듬
  bbb.style.margin = "0 3800px 0 0"; //mainForm이 오른쪽으로 가게 만듬]

  mainClock.classList.add("shownRight"); //mainForm이 천천히 오른쪽으로 가게 만듬
  mainClock.style.margin = "0 5800px 0 0"; //mainForm이 오른쪽으로 가게 만듬
}

ham6.addEventListener("click", clickHam6);
returnBtn.addEventListener("click", clickReturnBtn);

ham4.addEventListener("click", clickHam4);
