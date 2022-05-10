
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("mylist").style.display="block";
}



  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    if( Math.max(window.innerWidth < 768)){
      document.getElementById("mylist").style.display="none";
    }
  }
