// Function to open the side menu
function openSideMenu() {
  document.getElementById("side-nav-bar").style.width = "100%";
}

// Function to close the side menu
function closeSideMenu() {
  document.getElementById("side-nav-bar").style.width = "0px";
}

// when the photo is hovered, change to alternate one
function mouseIn() {
  document.getElementById("hover").src = "images/portrait 1.jpg";
}

function mouseOut() {
  document.getElementById("hover").src = "images/portrait 2.jpg";
}
// hide two flex boxes at the bottom, click "learn more" show
function toggle() {
  let flex_boxes = document.querySelectorAll(".flex-box-bottom");
  let learn_more_button = document.querySelector(".learn-more");

  for (let i = 0; i < flex_boxes.length; i++) {
    if (flex_boxes[i].style.display === "none") {
      flex_boxes[i].style.display = "block";
    } else {
      flex_boxes[i].classList.toggle("flex-box-bottom");
    }
  }

  learn_more_button.style.display = "none";
}
// random images slideshow
document.addEventListener("DOMContentLoaded", function () {
  let image = document.getElementById("logo");
  let images = [
    "images/jollylogo1.jpg",
    "images/jollylogo2.jpg",
    "images/jollylogo3.jpg",
    "images/jollylogo4.jpg",
    "images/jollylogo5.jpg",
    "images/jollylogo6.jpg",
    "images/jollylogo7.jpg",
  ];

  setInterval(function () {
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
  }, 1000);
});

// random images slideshow
document.addEventListener("DOMContentLoaded", function () {
  let image = document.getElementById("f1design");
  let images = [
    "images/PNG/banner.png",
    "images/PNG/brochure.png",
    "images/PNG/direction.png",
    "images/PNG/standee.png",
    "images/PNG/poster.png",
  ];

  setInterval(function () {
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
  }, 1300);
});

// Similar random images slideshow for "f1design" and "poster" elements
document.addEventListener("DOMContentLoaded", function () {
  let image = document.getElementById("poster");
  let images = [
    "images/EATING.jpg",
    "images/WORKING-OUT.jpg",
    "images/WORKING.jpg",
  ];

  setInterval(function () {
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
  }, 1300);
});

//changing color of text every 3 seconds
var i = 0;

function Colorchange() {
  let elements = document.querySelectorAll(".changeColour");
  var color = ["orange", "brown", "green", "violet"];

  elements.forEach(function (element) {
    element.style.color = color[i];
  });

  i = (i + 1) % color.length;
}

setInterval(Colorchange, 3000);

//input name and print out Greetings,
function printName() {
  var name = document.getElementById("nameInput").value;
  var outputElement = document.getElementById("output");

  if (name) {
    outputElement.textContent = "Greetings, " + name + "!";
    outputElement.style.display = "block";
  } else {
    outputElement.style.display = "none";
  }
}
