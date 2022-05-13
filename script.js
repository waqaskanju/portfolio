const form = document.getElementById('contact_msg');
form.addEventListener('submit', (event) => {
  const actual = form.elements.email.value;
  const allowed = actual.toLowerCase();
  if (actual === allowed) {
    form.submit();
  } else {
    const small = document.getElementById('error');
    small.style.color = 'white';
    small.style.fontSize = '12px';
    small.style.marginBlock = '20px';
    small.innerText = 'Email Should be in lowercase, Form Not Submitted';
    event.preventDefault();
  }
});

const projects = {
  project_1: {
    title: 'Tonic',
    sub_title: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './style/pictures/handheld/Tonic.png',
    linktolive: '#',
    linktosource: '#',
    language: {
      first: 'html', second: 'css', third: 'javascript', fourth: 'github', fifth: 'ruby', sixth: 'bootstrap',
    },
  },
  project_2: {
    title: 'Multi-Post Stories',
    sub_title: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'Morris Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: {
      first: 'html', second: 'css', third: 'javascript', fourth: 'github', fifth: 'ruby', sixth: 'bootstrap',
    },
    image: './style/pictures/handheld/Multi-Post.png',
    linktolive: '#',
    linktosource: '#',
  },
  project_3: {
    title: 'Facebook_360',
    sub_title: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: {
      first: 'html', second: 'css', third: 'javascript', fourth: 'github', fifth: 'ruby', sixth: 'bootstrap',
    },
    image: './style/pictures/handheld/Facebook_360.png',
    linktolive: '#',
    linktosource: '#',
  },
  project_4: {
    title: 'User Navigation',
    sub_title: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: {
      first: 'html', second: 'css', third: 'javascript', fourth: 'github', fifth: 'ruby', sixth: 'bootstrap',
    },
    image: './style/pictures/handheld/Tonic.png',
    linktolive: '#',
    linktosource: '#',
  },
};

function getProject(val) {
  const project = val;
  document.getElementById('popup_title').innerText = projects[project].title;
  document.getElementById('popup_sub_title').innerText = projects[project].sub_title;
  document.getElementById('popup_role').innerText = projects[project].role;
  document.getElementById('popup_year').innerText = projects[project].year;
  document.getElementById('popup_description').innerText = projects[project].description;
  document.getElementById('popup_image').innerText = projects[project].image;
  document.getElementById('html').innerText = projects[project].language.first;
  document.getElementById('css').innerText = projects[project].language.second;
  document.getElementById('javascript').innerText = projects[project].language.third;
  document.getElementById('github').innerText = projects[project].language.fourth;
  document.getElementById('ruby').innerText = projects[project].language.fifth;
  document.getElementById('bootstraps').innerText = projects[project].language.sixth;
  document.getElementById('live_link').href = projects[project].linktolive;
  document.getElementById('source_link').href = projects[project].linktosource;
}

function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('mylist').style.display = 'block';
  document.getElementById('open_btn').innerText = '';
  document.getElementById('close_btn').innerHTML = '&times;';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('open_btn').innerHTML = '&#9776;';
  document.getElementById('close_btn').innerHTML = '';
  if (Math.max(window.innerWidth < 768)) {
    document.getElementById('mylist').style.display = 'none';
    document.getElementById('close_btn').innerText = '';
  }
}

function closeOverlay() {
  if (Math.max(window.innerWidth > 768)) {
    closeNav();
  }
}

function openPopup(val) {
  document.getElementById('overlay-popup').style.display = 'block';
  getProject(val);
}

function closePopup() {
  document.getElementById('overlay-popup').style.display = 'none';
}

/* Save local data */
const myData = [];
let name;
let email;
let msg;

function saveName() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  msg = document.getElementById('message').value;
  myData[0] = name;
  myData[1] = email;
  myData[2] = msg;
  localStorage.setItem('my_values', JSON.stringify(myData));
}

function saveEmail() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  msg = document.getElementById('message').value;
  myData[0] = name;
  myData[1] = email;
  myData[2] = msg;
  localStorage.setItem('my_values', JSON.stringify(myData));
}
function saveMsg() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  msg = document.getElementById('message').value;
  myData[0] = name;
  myData[1] = email;
  myData[2] = msg;
  localStorage.setItem('my_values', JSON.stringify(myData));
}

function loadLocalData() {
  const d = localStorage.getItem('my_values');
  const data = JSON.parse(d);
  const [name, email, message] = data;
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('message').value = message;
}

const alpha = 1;
const beta = 2;
if (alpha === beta) {
  openPopup();
  closePopup();
  openNav();
  closeNav();
  closeOverlay();
  loadLocalData();
  saveEmail();
  saveName();
  saveMsg();
}