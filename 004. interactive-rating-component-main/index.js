const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
let number;

b1.onclick = function(){
  number = 1;
  unselectAll();
  b1.className = "selected";
}

b2.onclick = function(){
  number = 2;
  unselectAll();
  b2.className = "selected";
}

b3.onclick = function(){
  number = 3;
  unselectAll();
  b3.className = "selected";
}

b4.onclick = function(){
  number = 4;
  unselectAll();
  b4.className = "selected";
}

b5.onclick = function(){
  number = 5;
  unselectAll();
  b5.className = "selected";
}

function unselectAll(){
  b1.className = "rating-button";
  b2.className = "rating-button";
  b3.className = "rating-button";
  b4.className = "rating-button";
  b5.className = "rating-button";
}

document.getElementById("submit").onclick = function(){
  if(b1.className == "selected" || b2.className == "selected" || b3.className == "selected" || b4.className == "selected" || b5.className == "selected"){
    sessionStorage.setItem("number", number);
    window.location.href = "indexthanks.html";
  }
}