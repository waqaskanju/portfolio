function openNavigation() {
 const links = document.getElementById("mylinks");
 const bar = document.getElementById("bar")
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

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("mylist").style.display="block";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("mylist").style.display="none";
}