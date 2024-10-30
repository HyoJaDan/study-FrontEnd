// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
//전역변수
var n;
var country_capital_pairs = pairs;
//엔터를 누르면 내가쓴답이 지워지고 다시포커스잡히는함수
function Clear()
{
  document.getElementById("pr2__answer").value='';
  document.getElementById("pr2__answer").focus();
}

//임의의 Country 가 나오는 함수
function Init(){
  var con=document.getElementById("pr2__question");
  n=Math.floor(Math.random()*170)+1;
  con.innerHTML=country_capital_pairs[n].country;
  console.log(country_capital_pairs[n].country);
  console.log(country_capital_pairs[n].capital);
  return n;
}

//HTML요소를 생성하는 함수
function elt(name,attributes){
  var node=document.createElement(name);
  if(attributes){
    for(var attr in attributes){
      if(attributes.hasOwnProperty(attr)){
        node.setAttribute(attr,attributes[attr]);
      }
    }
  }
  for(var i=2; i<arguments.length; i++){
    var child=arguments[i];
    if(typeof child == "string"){
      child=document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}

function AllFunc(){
  var a=document.querySelectorAll("#wro");
  for(var i=0;i<a.length;i++)
  {

    $(a[i]).show();
  }
  var b=document.querySelectorAll("#cor");
  for(var i=0;i<a.length;i++)
  {

    $(b[i]).show();
  }
}

function CorFunc(){
  var a=document.querySelectorAll("#wro");
  for(var i=0;i<a.length;i++)
  {

    $(a[i]).hide();
  }
  var b=document.querySelectorAll("#cor");
  for(var i=0;i<a.length;i++)
  {

    $(b[i]).show();
  }
}

function WroFunc(){
  var a=document.querySelectorAll("#wro");
  for(var i=0;i<a.length;i++)
  {

    $(a[i]).show();
  }
  var b=document.querySelectorAll("#cor");
  for(var i=0;i<a.length;i++)
  {

    $(b[i]).hide();
  }
}


//시작
$( document ).ready(function() {$("#date").datepicker();
  n=Init();
  var id=document.getElementById("pr2__answer");
  id.addEventListener("keyup",pressEnter,false);
  var id2=document.getElementById("pr2__submit");
  id2.addEventListener("click",mainFunc,false);
  function pressEnter(){
    if(event.keyCode == 13 ) mainFunc();
  }
  //rg

  var capitals=country_capital_pairs.map(city => city.capital);
  $(function(){
    $("#pr2__answer").autocomplete({
      source: capitals,
    });
  });

//메인함수
  function mainFunc(e){
    var ans=document.getElementById("pr2__answer").value;
    var con=document.getElementById("pr2__question");

    if(ans==country_capital_pairs[n].capital){

      var tr=elt("tr",{id:"cor"});
      tr.appendChild(elt("td", null, country_capital_pairs[n].country));
      tr.appendChild(elt("td", null, country_capital_pairs[n].capital));
      var b=new Array();
      b[2]=tr.insertCell();
      b[2].innerHTML='<i class="fas fa-check"></i>';
      var a=elt("td",null);
      tr.appendChild(a);
      a.appendChild(elt("input",{type: "button", value:"Delete" ,id:"Del"}));
      tbl.insertBefore(tr,tbl.children[1]);
      document.getElementById("Del").onclick=function(){
        tbl.removeChild(tr);
      }
      document.getElementById("All").checked=true;
      AllFunc();
    }
    else {

      var tr=elt("tr",{id:"wro"});
      tr.appendChild(elt("td", null, country_capital_pairs[n].country));
      var t=elt("strike",null,ans);
      tr.appendChild(elt("td", null,t));
      tr.appendChild(elt("td",null, country_capital_pairs[n].capital));
      var a=elt("td",null);
      tr.appendChild(a);
      a.appendChild(elt("input",{type: "button", value:"Delete", id:"Del"}));
      tbl.insertBefore(tr,tbl.children[1]);

      document.getElementById("Del").onclick=function(){
        tbl.removeChild(tr);
      }
      document.getElementById("All").checked=true;
      AllFunc();
    }
    n=Init();
    Clear();


  }
});
