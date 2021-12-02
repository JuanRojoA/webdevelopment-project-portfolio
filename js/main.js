let titleElement = document.getElementById("title");
let projectContainerElementOne = document.getElementById(
  "section-container-one"
);
let projectContainerElementTwo = document.getElementById(
  "section-container-two"
);
let projectContainerElementThree = document.getElementById(
  "section-container-three"
);
let projectContainerElementFour = document.getElementById(
  "section-container-four"
);
let jsonData = [
  {
    projectType: 1,
    image: "https://picsum.photos/300/200",
    altImage: "Image representing the project",
    title: "Project Title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia vel distinctio ducimus in amet sequi, modi minus neque, vitae facilis! Dolore sint accusantium esse voluptate iste. Quam, vel veritatis.",
    link: "https://github.com/JuanRojoA",
    date: "12 sep 2021",
  },
  {
    projectType: 1,
    image: "https://picsum.photos/300/200",
    altImage: "Image representing the project",
    title: "Project Title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia vel distinctio ducimus in amet sequi, modi minus neque, vitae facilis! Dolore sint accusantium esse voluptate iste. Quam, vel veritatis.",
    link: "https://github.com/JuanRojoA",
    date: "12 sep 2021",
  },
  {
    projectType: 2,
    image: "https://picsum.photos/300/200",
    altImage: "Image representing the project",
    title: "Project Title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia vel distinctio ducimus in amet sequi, modi minus neque, vitae facilis! Dolore sint accusantium esse voluptate iste. Quam, vel veritatis.",
    link: "https://github.com/JuanRojoA",
    date: "12 sep 2021",
  },
  {
    projectType: 3,
    image: "https://picsum.photos/300/200",
    altImage: "Image representing the project",
    title: "Project Title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia vel distinctio ducimus in amet sequi, modi minus neque, vitae facilis! Dolore sint accusantium esse voluptate iste. Quam, vel veritatis.",
    link: "https://github.com/JuanRojoA",
    date: "12 sep 2021",
  },
  {
    projectType: 4,
    image: "https://picsum.photos/300/200",
    altImage: "Image representing the project",
    title: "Project Title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia vel distinctio ducimus in amet sequi, modi minus neque, vitae facilis! Dolore sint accusantium esse voluptate iste. Quam, vel veritatis.",
    link: "https://github.com/JuanRojoA",
    date: "12 sep 2021",
  },
];

console.log(jsonData);

if (navigator.language.includes("en")) {
  console.log("language is english");
  document.documentElement.setAttribute("lang", navigator.language);
} else if (navigator.language.includes("es")) {
  console.log("language is spanish");
  document.documentElement.setAttribute("lang", navigator.language);
} else {
  console.log("language is other");
  document.documentElement.setAttribute("lang", "en");
}

function addProject(arrayData) {
  for (i = 0; i < arrayData.length; i++) {
    let projectItem = ` 
    <div class="project-container">
      <img
        src=${arrayData[i].image}
        alt="${arrayData[i].altImage}"
        class="project-container__img"
      />
      <h3 class="project-container__title">${arrayData[i].title}</h3>
      <p class="project-container__description">${arrayData[i].description}</p>
      <a href="${arrayData[i].link}" target="_blank" class="project-container__link">See Project</a>
      <span class="project-container__date">${arrayData[i].date}</span>
    </div>`;
    if (arrayData[i].projectType === 1) {
      projectContainerElementOne.innerHTML += projectItem;
    } else if (arrayData[i].projectType === 2) {
      projectContainerElementTwo.innerHTML += projectItem;
    } else if (arrayData[i].projectType === 3) {
      projectContainerElementThree.innerHTML += projectItem;
    } else if (arrayData[i].projectType === 4) {
      projectContainerElementFour.innerHTML += projectItem;
    }
  }
}

addProject(jsonData);
