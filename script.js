function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("mylist").style.display="block";
  document.getElementById("open_btn").innerText="";
  document.getElementById("close_btn").innerHTML="&times;";
}

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("open_btn").innerHTML="&#9776;";
    document.getElementById("close_btn").innerHTML="";
    if( Math.max(window.innerWidth < 768)){
      document.getElementById("mylist").style.display="none";
      document.getElementById("close_btn").innerText="";
    } else{
     /*  document.getElementById("close_btn").innerHTML="&times;"; */
    }
  }

function close_overlay(){
  if( Math.max(window.innerWidth > 768)){
    closeNav();
  }
}

function open_popup() {
  document.getElementById("overlay-popup").style.display = "block";
}

function close_popup() {
  document.getElementById("overlay-popup").style.display = "none";
}
  