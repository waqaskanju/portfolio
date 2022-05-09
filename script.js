function openNavigation() {
  var links = document.getElementById("mylinks");
  var bar = document.getElementById("bar")
  if (links.style.display === "flex") {
    links.style.display = "none";
    bar.classList.remove("fa-times");
    bar.classList.add("fa-bars");

  } else {
    links.style.display = "flex";
    links.style.flexDirection="column"
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-times");
  }
}