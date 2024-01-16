const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

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

myButton.onclick = () => {
  setUserName();
};
