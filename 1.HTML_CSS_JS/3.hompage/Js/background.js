const pic = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg"
];
//var RanNum = "12.jpg";
//document.body.background = `Img/${RanNum}`;
var RanNum = Math.round(Math.random() * (pic.length - 1));
document.body.background = `Img/${pic[RanNum]}`;
// 9 71
