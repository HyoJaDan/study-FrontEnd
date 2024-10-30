const timer = document.getElementById("timer");
const lines = timer.querySelector("#lines");
const fins = timer.querySelector("#fins");
const nums = timer.querySelector("#num-container");
const btn = document.querySelector(".btn");
//const remainTime = document.querySelector(".time-container #remain-time");
//const totalTime = document.querySelector(".time-container #total-time");

const Min1 = document.querySelector("#Min1");
const Min2 = document.querySelector("#Min2");
const Min3 = document.querySelector("#Min3");
const Min4 = document.querySelector("#Min4");
var endTime = 0;
let intervalID = null;
let progressTimeSec = 0;
const TextOfMin1 = document.querySelector(".boxTable1");
const TextOfMin2 = document.querySelector(".boxTable2");
const TextOfMin3 = document.querySelector(".boxTable3");
const TextOfMin4 = document.querySelector(".boxTable4");
let numOfMin1 = 0;
let numOfMin2 = 0;
let numOfMin3 = 0;
let numOfMin4 = 0;
var boolOfMin1 = false;
var boolOfMin2 = false;
var boolOfMin3 = false;
var boolOfMin4 = false;
let isPlay = false;

function paintLines() {
  for (let i = 0; i < 30; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${i * 6}deg)`;

    if (i % 5 === 0) {
      line.classList.add("thick");
    }

    lines.append(line);
  }
}

function paintNumber() {
  let left = 15;
  let right = 45;

  for (let i = 0; i < 6; i++) {
    const numBox = document.createElement("div");
    numBox.classList.add("num-box");
    numBox.style.transform = `rotate(${i * 30}deg)`;

    const spanLeft = document.createElement("span");
    const spanRight = document.createElement("span");

    const leftText = left - 5 * i;
    spanLeft.textContent = leftText < 0 ? 60 + leftText : leftText;
    spanRight.textContent = right - 5 * i;

    spanLeft.style.transform = `rotate(${-30 * i}deg)`;
    spanRight.style.transform = `rotate(${-30 * i}deg)`;

    numBox.append(spanLeft, spanRight);
    nums.append(numBox);
  }
}

function paintRemainTime() {
  //emdTime만큼 빨간색으로 색칠
  removeRemainTime();
  for (let min = 0; min < endTime; min++) {
    for (let sec = 0; sec < 60; sec++) {
      const remainFin = document.createElement("div");
      remainFin.classList.add("fin");

      const deg = min * 6 + sec * 0.1;
      remainFin.style.transform = `rotate(${-deg}deg)`; //transform: rotate(45deg);

      fins.append(remainFin);
    }
  }
}

function removeRemainTime() {
  while (fins.hasChildNodes()) {
    fins.removeChild(fins.firstChild);
  }
}

function tickSec() {
  progressTimeSec++;
  if (progressTimeSec >= endTime * 60) {
    // 끝날 시
    pause();
    progressTimeSec = 0;
    if (boolOfMin1 === true) {
      TextOfMin1.innerHTML = ++numOfMin1;
    }
    if (boolOfMin2 === true) {
      TextOfMin2.innerHTML = ++numOfMin2;
    }
    if (boolOfMin3 === true) {
      TextOfMin3.innerHTML = ++numOfMin3;
    }
    if (boolOfMin4 === true) {
      TextOfMin4.innerHTML = ++numOfMin4;
    }
  }
  const lastFin = fins.lastChild;

  if (lastFin) {
    lastFin.remove();
  }

  //renderRemainTime();남은시간 텍스트로 보여주는 함수
}

function play() {
  $(".neumorphic-checkbox").toggleClass("neumorphic-checkbox_active");
  intervalID = setInterval(tickSec, 1000);
  isPlay = true;
}

function pause() {
  $(".neumorphic-checkbox").toggleClass("neumorphic-checkbox_active");
  clearInterval(intervalID);
  isPlay = false;
}

function onClickControl() {
  if (isPlay) {
    pause();
    StopClock();
  } else {
    play();
    StartClock();
  }
}

if (lines) {
  paintLines();
}

if (nums) {
  paintNumber();
}

if (fins) {
  paintRemainTime();
}

if (btn) {
  btn.addEventListener("click", onClickControl);
}

function ClickMin() {
  boolOfMin1 = true;
  boolOfMin2 = false;
  boolOfMin3 = false;
  boolOfMin4 = false;
  if (isPlay === true) {
    progressTimeSec = 0;
    pause();
  }
  endTime = 20;
  paintRemainTime();
}
function ClickMin1() {
  boolOfMin1 = false;
  boolOfMin2 = true;
  boolOfMin3 = false;
  boolOfMin4 = false;
  if (isPlay === true) {
    progressTimeSec = 0;
    pause();
  }
  endTime = 30;
  paintRemainTime();
}
function ClickMin2() {
  boolOfMin1 = false;
  boolOfMin2 = false;
  boolOfMin3 = true;
  boolOfMin4 = false;
  if (isPlay === true) {
    progressTimeSec = 0;
    pause();
  }
  endTime = 45;
  paintRemainTime();
}
function ClickMin3() {
  boolOfMin1 = false;
  boolOfMin2 = false;
  boolOfMin3 = false;
  boolOfMin4 = true;
  if (isPlay === true) {
    progressTimeSec = 0;
    pause();
  }
  endTime = 60;
  paintRemainTime();
}

Min1.addEventListener("click", function () {
  ClickMin();
  Min1.classList.add("focusMin");
  removeAll(Min2);
  removeAll(Min3);
  removeAll(Min4);
});
Min2.addEventListener("click", function () {
  ClickMin1();
  Min2.classList.add("focusMin");
  removeAll(Min1);
  removeAll(Min3);
  removeAll(Min4);
});
Min3.addEventListener("click", function () {
  ClickMin2();
  Min3.classList.add("focusMin");
  removeAll(Min1);
  removeAll(Min2);
  removeAll(Min4);
});
Min4.addEventListener("click", function () {
  ClickMin3();
  Min4.classList.add("focusMin");
  removeAll(Min1);
  removeAll(Min2);
  removeAll(Min3);
});
//const remainTime = document.querySelector(".time-container #remain-time"); //const totalTime = document.querySelector(".time-container #total-time");

/* 남은 시간을 숫자로 알려주는 함수
<!-- <div class="time-container" style="display:none" > ---------HTML
            <div id="remain-time" class="remain-time"></div>
            <div id="total-time" class="total-time"></div>
        </div>-->
if (remainTime && totalTime) {          --------------------------JS
  paintTime();
}
*/
/*
function renderRemainTime() {
  const totalSec = endTime * 60 - progressTimeSec;
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;

  remainTime.textContent = `
        ${min < 10 ? `0${min}` : min} : 
        ${sec < 10 ? `0${sec}` : sec}
    `;
}

function paintTime() {
  renderRemainTime();
  totalTime.textContent = `(${endTime} : 00)`;
}
*/

let nowTime = 0;
let nowMinute = 0;
const rightBottomText = document.querySelector(
  "#main-clock-right-bottom #MCRBText"
);

function PrintTime() {
  nowTime++;
  nowMinute = nowTime / 60;
  nowMinute = Math.floor(nowMinute);
  rightBottomText.innerHTML = `You've Studied for ${nowMinute} minutes`;
}
// 중지를 위해 ID 보관
var timerId = null;
// 시계 시작
function StartClock() {
  PrintTime();
  timerId = setInterval(PrintTime, 1000);
}
// 시계 중지
function StopClock() {
  if (timerId != null) {
    clearInterval(timerId);
  }
}

var a = 0;
const listDay = document.querySelector(".fa-caret-down");

$(document).ready(function () {
  $(".fa-caret-down").click(function () {
    $(".hideList").animate({ width: "toggle" }, 400);
  });
});

listDay.onclick = function () {
  if (a === 0) {
    //처음 화면일시
    listDay.classList.add("spinFa");

    a = 1;
  } else {
    listDay.classList.remove("spinFa");
    a = 0;
  }
};

const needClicked1 = document.querySelector(
  "#main-clock-right-bottom .hideList #firstList"
);
const needClicked2 = document.querySelector(
  "#main-clock-right-bottom .hideList #secondList"
);
const needClicked3 = document.querySelector(
  "#main-clock-right-bottom .hideList #thirdList"
);

function addClickedNeed(NC) {
  NC.classList.add("needClickedCss");
}
function removeClickedNeed(NC) {
  NC.classList.remove("needClickedCss");
}

function removeAll(NC) {
  NC.className = "hideAll";
}
function ClickedNeed(NC) {
  NC.className = "ClickedCss";
}

//마우스를 올렸을때, 내렸을 떄 needClickedCss 추가
needClicked1.addEventListener("mouseover", function () {
  addClickedNeed(needClicked1);
});
needClicked1.addEventListener("mouseout", function () {
  removeClickedNeed(needClicked1);
});
needClicked2.addEventListener("mouseover", function () {
  addClickedNeed(needClicked2);
});
needClicked2.addEventListener("mouseout", function () {
  removeClickedNeed(needClicked2);
});
needClicked3.addEventListener("mouseover", function () {
  addClickedNeed(needClicked3);
});
needClicked3.addEventListener("mouseout", function () {
  removeClickedNeed(needClicked3);
});

//클릭했을 때, 나머지 needClickedCss모두 없애고 ClickedCss 추가
needClicked1.addEventListener("click", function () {
  ClickedNeed(needClicked1);
  removeAll(needClicked2);
  removeAll(needClicked3);
});
needClicked2.addEventListener("click", function () {
  ClickedNeed(needClicked2);
  removeAll(needClicked1);
  removeAll(needClicked3);
});
needClicked3.addEventListener("click", function () {
  ClickedNeed(needClicked3);
  removeAll(needClicked1);
  removeAll(needClicked2);
});
