// import images from src folder
import background from "./assets/background.jpeg";

import "./style.css";
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";

// Get link references
const homeLink = document.getElementById("home-link");
const contactLink = document.getElementById("contact-link");
const menuLink = document.getElementById("menu-link");
console.log("Got references");

// Attach event listeners. Touchstart for touchscreens, click otherwise

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  homeLink.addEventListener("touchstart", loadHome);
  contactLink.addEventListener("touchstart", loadContact);
  menuLink.addEventListener("touchstart", loadMenu);
} else {
  homeLink.addEventListener("click", loadHome);
  contactLink.addEventListener("click", loadContact);
  menuLink.addEventListener("click", loadMenu);
  console.log("added event listeners");
}

// Start by loading home screen content
loadHome();
