// import images from src folder
import background from "./assets/background.jpeg";

import "./style.css";
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";

// Get references
const homeLink = document.getElementById("home-link");
const contactLink = document.getElementById("contact-link");
const menuLink = document.getElementById("menu-link");
const contentDiv = document.getElementById("content");
console.log("Got references");

// Attach event listeners. touchstart for touchscreens, click otherwise
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  homeLink.addEventListener("touchstart", () => {
    loadContent(loadHome);
  });
  contactLink.addEventListener("touchstart", () => {
    loadContent(loadContact);
  });
  menuLink.addEventListener("touchstart", () => {
    loadContent(loadMenu);
  });
} else {
  homeLink.addEventListener("click", () => {
    loadContent(loadHome);
  });
  contactLink.addEventListener("click", () => {
    loadContent(loadContact);
  });
  menuLink.addEventListener("click", () => {
    loadContent(loadMenu);
  });
  console.log("added event listeners");
}

function loadContent(contentFunction) {
  contentFunction();
  contentDiv.classList.remove("fade-in-class");
  setTimeout(() => {
    contentDiv.classList.add("fade-in-class");
  }, 5);

  console.log("inside loadContent function");
}
// Start by loading home screen content
loadContent(loadHome);
