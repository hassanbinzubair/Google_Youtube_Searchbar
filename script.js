let navlogo = document.getElementById("nav-logo");
navlogo.addEventListener("click", () => {
  location.reload();
});
let contact = document.getElementById("contact-btn");
contact.addEventListener("click", () => {
  location = "mailto:hassanbinzubair5@gmail.com";
});
let github = document.getElementById("github-btn");
github.addEventListener("click", () => {
  location = "https://github.com/hassanbinzubair";
});
let portfolio = document.getElementById("portfolio-btn");
portfolio.addEventListener("click", () => {
  location = "https://hassanbinzubair.github.io";
});
