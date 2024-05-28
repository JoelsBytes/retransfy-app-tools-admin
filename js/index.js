const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const rctBx = document.getElementById("rct-bx");
const rctHref = document.getElementById("rctHref");

const apiBx = document.getElementById("api-bx");
const apiHref = document.getElementById("apiHref");

const rateBx = document.getElementById("rate-bx");
const rateHref = document.getElementById("rateHref");

const netBx = document.getElementById("net-bx");
const netHref = document.getElementById("netHref");

apiHref.addEventListener("click", () => {
  rctBx.style.display = "none";
  apiBx.style.display = "flex";
  rateBx.style.display = "none";
  netBx.style.display = "none";
  navLinks.classList.toggle("active");
});

rateHref.addEventListener("click", () => {
  rctBx.style.display = "none";
  apiBx.style.display = "none";
  rateBx.style.display = "flex";
  netBx.style.display = "none";
  navLinks.classList.toggle("active");
});

netHref.addEventListener("click", () => {
  rctBx.style.display = "none";
  apiBx.style.display = "none";
  rateBx.style.display = "none";
  netBx.style.display = "flex";
  navLinks.classList.toggle("active");
});

rctHref.addEventListener("click", () => {
  rctBx.style.display = "flex";
  apiBx.style.display = "none";
  rateBx.style.display = "none";
  netBx.style.display = "none";
  navLinks.classList.toggle("active");
});