
const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    console.log('clicked')
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
