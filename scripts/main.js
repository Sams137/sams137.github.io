const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let animeButton = document.querySelectorAll("button")[1]

myHeading.textContent = "Sam's Page";

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cup.jpg") {
    myImage.setAttribute("src", "images/cup_sat.jpg");
  } else {
    myImage.setAttribute("src", "images/cup.jpg");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Sam's page is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Sam's page is cool, ${storedName}`;
}

/*
myButton.onclick = () => {
  setUserName();
};
*/

animeButton.onclick = () => {
  myMove();
};

function myMove() {
  var id = null;
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  
  clearInterval(id);
  id = setInterval(circle, 10);

  /*
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
  */
  
  function circle() {
    let  width = 100,
         height = 100,
         offsetX = 200,
         offsetY = 200;
    
    var x = Math.cos(pos) * width + offsetX;
    var y = Math.sin(pos) * height + offsetY;
    
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    pos++
    if (pos == 500) {
      pos = 0;
    }
  }
}
