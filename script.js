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

function open_popup(val) {
  document.getElementById("overlay-popup").style.display = "block";
  get_project(val);
}

function close_popup() {
  document.getElementById("overlay-popup").style.display = "none";
}
  
const projects = {
  project_1: {
    title: "Tonic",
    sub_title: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: { first: "html", second: "css", third: "javascript" },
    image: "./style/pictures/handheld/Tonic.png",
  },
  project_2: {
    title: "Multi-Post Stories",
    sub_title: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Morris Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: { first: "html", second: "css", third: "javascript" },
    image: "./style/pictures/handheld/Multi-Post.png",
  },
  project_3: {
    title: "Facebook_360",
    sub_title: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: { first: "html", second: "css", third: "javascript" },
    image: "./style/pictures/handheld/Facebook_360.png",
  },
  project_4: {
    title: "User Navigation",
    sub_title: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: { first: "html", second: "css", third: "javascript" },
    image: "./style/pictures/handheld/Tonic.png",
  },
};

function get_project(val){
   const project=val;
   document.getElementById("popup_title").innerText= projects[project]["title"];
   document.getElementById("popup_sub_title").innerText=projects[project]["sub_title"];;
   document.getElementById("popup_role").innerText=projects[project]["role"];
   document.getElementById("popup_year").innerText=projects[project]["year"];
   document.getElementById("popup_description").innerText=projects[project]["description"];
   document.getElementById("popup_image").innerText=projects[project]["image"];
}