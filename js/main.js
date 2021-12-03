let titleElement = document.getElementById("header-title");
let mainpageBtnElement = document.getElementById("mainpage-link");
let esLangBtnSelector = document.getElementById("lang-es");
let enLangBtnSelector = document.getElementById("lang-en");
let projectContainerElementOne = document.getElementById("section-container-one");
let projectContainerElementTwo = document.getElementById("section-container-two");
let projectContainerElementThree = document.getElementById("section-container-three");
let projectContainerElementFour = document.getElementById("section-container-four");
let enJsonData = [];
let esJsonData = [];

async function readJSON() {
  let response;
  document.documentElement.setAttribute("lang", "en");
  response = await fetch("./js/enData.json");
  enJsonData = await response.json();
  response = await fetch("./js/esData.json");
  esJsonData = await response.json();
  if (navigator.language.includes("en") || !navigator.language.includes("es")) {
    await renderProjectsPage(enJsonData);
    enLangBtnSelector.classList.add("active");
  } else if (navigator.language.includes("es")) {
    await renderProjectsPage(esJsonData);
    esLangBtnSelector.classList.add("active");
  }
}

function renderProjectsPage(arrayData) {
  projectContainerElementOne.innerHTML = ""
  projectContainerElementTwo.innerHTML = ""
  projectContainerElementThree.innerHTML = ""
  projectContainerElementFour.innerHTML = ""
  titleElement.innerText = arrayData.pageTitle
  mainpageBtnElement.innerText = arrayData.mainButtonText
  for (i = 0; i < arrayData.projects.length; i++) {
    let projectItem = ` 
    <div class="project-container">
      <img src="${arrayData.projects[i].image}" alt="${arrayData.projects[i].altImage}" class="project-container__img"/>
      <h3 class="project-container__title">${arrayData.projects[i].title}</h3>
      <p class="project-container__description">${arrayData.projects[i].description}</p>
      <a href="${arrayData.projects[i].link}" target="_blank" class="project-container__link">${arrayData.projectsButton}</a>
      <span class="project-container__date">${arrayData.projects[i].date}</span>
    </div>`;
    if (arrayData.projects[i].projectType === 1) {
      projectContainerElementOne.innerHTML += projectItem;
    } else if (arrayData.projects[i].projectType === 2) {
      projectContainerElementTwo.innerHTML += projectItem;
    } else if (arrayData.projects[i].projectType === 3) {
      projectContainerElementThree.innerHTML += projectItem;
    } else if (arrayData.projects[i].projectType === 4) {
      projectContainerElementFour.innerHTML += projectItem;
    }
  }
}

esLangBtnSelector.addEventListener("click", (e) => {
  document.documentElement.setAttribute("lang", "es");
  esLangBtnSelector.classList.add("active");
  if (enLangBtnSelector.classList.contains("active")) {
    enLangBtnSelector.classList.remove("active");
  }
  renderProjectsPage(esJsonData);
});

enLangBtnSelector.addEventListener("click", (e) => {
  document.documentElement.setAttribute("lang", "en");
  enLangBtnSelector.classList.add("active");
  if (esLangBtnSelector.classList.contains("active")) {
    esLangBtnSelector.classList.remove("active");
  }
  renderProjectsPage(enJsonData);
});

readJSON();
