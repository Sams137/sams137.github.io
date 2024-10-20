/*************
 * Variables *
 *************/
const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let animeButton = document.querySelector("button");
let fmiTempButton = document.querySelectorAll("button")[1];
let fmiWindButton = document.querySelectorAll("button")[2];
let fmiObsButton = document.querySelectorAll("button")[3];
let animFlag = false;
let id = null;
/* let dnsName = localHostOrDomainIs("github.com", "github.com"); */

/*************
 * Functions *
 *************/
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Sam's page is cool, ${myName}`;
};

function myColors() {
  var newChar;
  for (var ii = 0; ii < 19; ii++) {
    newChar = myHeading.textContent.charAt(ii); 
    newChar = 'A';
  }
};

function myMove() {
  var elem_one = document.getElementById("myAnimation");
  var elem_two = document.getElementById("myAnimation_two");
  var pos_elem_one = 0;
  var pos_elem_two = 0;
  
  clearInterval(id);
  id = setInterval(circle, 1);

  function circle() {
    let  width_one = 100,
         height_one = 100,
         offsetX_one = 175,
         offsetY_one = 175;

    let  width_two = 137,
         height_two = 137,
         offsetX_two = 190,
         offsetY_two = 190;
    
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

function normalDateTime() {
  const now = new Date();
  var currentDateTime = now.toLocaleTimeString("fi-FI");
  currentDateTime = currentDateTime.split('.').join(':');
  document.querySelector('#datetime').textContent = currentDateTime;
}

function epochTime() {
  var eponow = new Date().getTime();
  eponow = (eponow/1000|0)+7200;
  document.querySelector('#epochtime').textContent = eponow;
}

setInterval(normalDateTime, 1000);
setInterval(epochTime, 1000);

/***********
 * Actions *
 ***********/
myHeading.textContent = "Sam's Page";

/* Events */
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cup.jpg") {
    myImage.setAttribute("src", "images/cup_sat.jpg");
  } else {
    myImage.setAttribute("src", "images/cup.jpg");
  }
};

fmiTempButton.onclick = () => {
  window.location.href = 'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::forecast::harmonie::surface::point::timevaluepair&place=Helsinki&parameters=Temperature';
};

fmiWindButton.onclick = () => {
  window.location.href = 'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::forecast::harmonie::surface::point::timevaluepair&place=Helsinki&parameters=WindSpeedMS';
};

fmiObsButton.onclick = () => {
  window.location.href = 'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=Helsinki&parameters=t2m';
};

animeButton.onclick = () => {
  if (animFlag == false) {
    myMove();
    animFlag = true;
  } else if (animFlag == true) {
    clearInterval(id);
    animFlag = false;
  }
};
