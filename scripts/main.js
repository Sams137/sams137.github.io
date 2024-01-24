const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let animeButton = document.querySelectorAll("button")[1]
let animFlag = false;
let id = null;

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
};

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
  if (animFlag == false) {
    myMove();
    animFlag = true;
  } else if (animFlag == true) {
    clearInterval(id);
    animFlag = false;
  }
};

function myMove() {
  var elem_one = document.getElementById("myAnimation");
  var elem_two = document.getElementById("myAnimation_two");
  var pos_elem_one = 0;
  var pos_elem_two = 0;
  
  clearInterval(id);
  id = setInterval(circle, 1);

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
    let  width_one = 100,
         height_one = 100,
         offsetX_one = 175,
         offsetY_one = 175;

    let  width_two = 137,
         height_two = 137,
         offsetX_two = 175,
         offsetY_two = 175;
    
    var x = Math.cos(pos_elem_one) * width_one + offsetX_one;
    var y = Math.sin(pos_elem_one) * height_one + offsetY_one;

    var a = Math.cos(pos_elem_two) * width_two + offsetX_two;
    var b = Math.sin(pos_elem_two) * height_two + offsetY_two;
    
    elem_one.style.left = x + 'px';
    elem_one.style.top = y + 'px';

    elem_two.style.left = a + 'px';
    elem_two.style.top = b + 'px';
    
    pos_elem_one += 0.01;
    pos_elem_two += -0.01;
    
    if (pos_elem_one > 500) {
      pos_elem_one = 0;
    }

    if (pos_elem_two < -500) {
      pos_elem_two = 0;
    }
  }
}
