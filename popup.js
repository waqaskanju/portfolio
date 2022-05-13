const overlayContent = document.getElementById('overlay-content-popup');
const section = document.createElement('section');
section.classList.add('work');
section.setAttribute('id', 'portfolio_popup');

/* Create DIV 1 */

const popupHeader = document.createElement('div');
popupHeader.classList.add('popup-header');
section.appendChild(popupHeader);

/* inside popupHeader add h3 and a */
const h3Title = document.createElement('h3');
popupHeader.appendChild(h3Title);
h3Title.classList.add('project__name');
h3Title.setAttribute('id', 'popup_title');

const popupCloseButton = document.createElement('a');
// popupCloseButton.setAttribute('href', 'javascript:void(0)');
popupCloseButton.setAttribute('onclick', 'closePopup()');
popupCloseButton.innerHTML = '&times;';
popupHeader.appendChild(popupCloseButton);

/* add span to section */
const projectRoleContainer = document.createElement('span');
projectRoleContainer.classList.add('project__role__container');
section.appendChild(projectRoleContainer);
/* add b to section */
const popupSubTitle = document.createElement('b');
popupSubTitle.classList.add('project__conopy_popup');
popupSubTitle.setAttribute('id', 'popup_sub_title');
section.appendChild(popupSubTitle);
/* add ul to section */
const languages = document.createElement('ul');
languages.classList.add('project__role');
languages.classList.add('hug_content');
/* Add 2 li to ul */
const role = document.createElement('li');
role.setAttribute('id', 'popup_role');
languages.appendChild(role);
const year = document.createElement('li');
year.setAttribute('id', 'popup_year');
languages.appendChild(year);
section.appendChild(languages);
/* Add picture div */
const pictureContainer = document.createElement('div');
pictureContainer.classList.add('work_picture--container');
const picture = document.createElement('picture');
pictureContainer.appendChild(picture);
const source = document.createElement('source');
source.setAttribute('srcset', './style/pictures/desktop/Tonic.png');
source.setAttribute('media', '(min-width: 785px)');
const img = document.createElement('img');
img.setAttribute('src', './style/pictures/handheld/Tonic.png');
img.setAttribute('id', 'popup_image');
img.setAttribute('alt', 'Tonic');
picture.appendChild(source);
picture.appendChild(img);
section.appendChild(pictureContainer);

/* Work Content */
const workContent = document.createElement('div');
workContent.classList.add('work__content');
section.appendChild(workContent);

const description = document.createElement('p');
description.classList.add('project__description');
description.setAttribute('id', 'popup_description');
workContent.appendChild(description);

const projectL = document.createElement('div');
workContent.appendChild(projectL);

const topLanguages = document.createElement('ul');
topLanguages.classList.add('project__languages');

const html = document.createElement('li');
html.classList.add('languages');

const css = document.createElement('li');
css.classList.add('languages');
const javascript = document.createElement('li');
javascript.classList.add('languages');

topLanguages.appendChild(html);
topLanguages.appendChild(css);
topLanguages.appendChild(javascript);
projectL.appendChild(topLanguages);

const linkHtml = document.createElement('a');
linkHtml.href = '#';
const linkCss = document.createElement('a');
linkCss.href = '#';
const linkJavascript = document.createElement('a');
linkJavascript.href = '#';

linkHtml.setAttribute('id', 'html');
linkCss.setAttribute('id', 'css');
linkJavascript.setAttribute('id', 'javascript');

html.appendChild(linkHtml);
css.appendChild(linkCss);
javascript.appendChild(linkJavascript);

const bottomLanguages = document.createElement('ul');
bottomLanguages.classList.add('project__languages', 'm-t-1');
const github = document.createElement('li');
github.classList.add('languages');
github.classList.add('popup_extra_languages');
const ruby = document.createElement('li');
ruby.classList.add('languages');
ruby.classList.add('popup_extra_languages');
const bootstraps = document.createElement('li');
bootstraps.classList.add('languages');
bootstraps.classList.add('popup_extra_languages');

bottomLanguages.appendChild(github);
bottomLanguages.appendChild(ruby);
bottomLanguages.appendChild(bootstraps);

const linkGithub = document.createElement('a');
linkGithub.href = '#';
const linkRuby = document.createElement('a');
linkRuby.href = '#';
const linkBootstraps = document.createElement('a');
linkBootstraps.href = '#';

github.appendChild(linkGithub);
ruby.appendChild(linkRuby);
bootstraps.appendChild(linkBootstraps);

linkGithub.setAttribute('id', 'github');
linkRuby.setAttribute('id', 'ruby');
linkBootstraps.setAttribute('id', 'bootstraps');

projectL.appendChild(bottomLanguages);

const mTL = document.createElement('div');
mTL.classList.add('mTL');
projectL.appendChild(mTL);

const seeLive = document.createElement('a');
// seeLive.href = 'javascript:void(0)'
seeLive.classList.add('project__link');
seeLive.setAttribute('onclick', 'open_popup()');

const faCircle = document.createElement('i');
faCircle.classList.add('fa', 'fa-circle-o-notch');
mTL.appendChild(seeLive);

const seeSource = document.createElement('a');
mTL.appendChild(seeSource);
// seeSource.href = 'javascript:void(0)';
seeSource.classList.add('project__link');
seeSource.setAttribute('onclick', 'open_popup()');
const faBrands = document.createElement('i');
faBrands.classList.add('fa-brands', 'fa-github');
seeLive.innerHTML = 'See Live';
seeSource.innerHTML = 'See Source';
seeLive.setAttribute('id', 'live_link');
seeSource.setAttribute('id', 'source_link');

seeLive.appendChild(faCircle);
seeSource.appendChild(faBrands);

overlayContent.appendChild(section);
