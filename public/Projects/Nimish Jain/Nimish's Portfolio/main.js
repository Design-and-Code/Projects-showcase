document.addEventListener(
  "DOMContentLoaded",
  async () => {
    loadSkillsPage();
    loadProjectsPage();
    loadResearchPage();
  },
  false
);

function loadSkillsPage() {
  var skills = [
    { name: "C", image: "./assets/c.png" },
    { name: "C++", image: "./assets/cpp.png" },
    { name: "Java", image: "./assets/java.png" },
    { name: "Python", image: "./assets/python.png" },
    { name: "HTML", image: "./assets/HTML5.png" },
    { name: "CSS", image: "./assets/css3.png" },
    { name: "JavaScript", image: "./assets/javascript.png" },
    { name: "React JS", image: "./assets/reactjs.png" },
    { name: "Matlab", image: "./assets/matlab.png" },
    { name: "Git", image: "./assets/git.png" },
    { name: "GitHub", image: "./assets/github.png" },
    { name: "Discord.py", image: "./assets/discord.png" },
    { name: "VS Code", image: "./assets/vs_code.svg" },
    { name: "Ubuntu", image: "./assets/ubuntu.png" },
  ];

  var allSkills = document.getElementById("all-skills");

  for (var i = 0; i < skills.length; i++) {
    var element = document.createElement("div");
    element.classList.add("skill-card");
    element.innerHTML = `
            <img src="${skills[i].image}" alt="${skills[i].name}">
            <p>${skills[i].name}</p>
        `;
    allSkills.appendChild(element);
  }
}

function loadProjectsPage() {
  projects = [
    {
      title: "Expense tracker",
      image: "./assets/expense.png",
      description:
        "Add your expenses along with description and date and get the total expense.",
      deploy: "https://nimishjn.github.io/ADG-WebDev-Task2/",
      repo: "https://github.com/nimishjn/ADG-WebDev-Task2/",
    },
    {
      title: "Quiz using API",
      image: "./assets/quiz.png",
      description:
        "Takes the questions from an API and renders a 10 questions quiz.",
      deploy: "https://nimishjn.github.io/ADG-WebDev-Task3/",
      repo: "https://github.com/nimishjn/ADG-WebDev-Task3/",
    },
    {
      title: "Links",
      image: "./assets/links.png",
      description: "Used to host all my skills and links on one website",
      deploy: "https://links.nimish-jain.com/",
      repo: "https://github.com/nimishjn/links/",
    },
    {
      title: "Resume",
      image: "./assets/resume.png",
      description:
        "A person can visit this website to either view or download my resume.",
      deploy: "https://resume.nimish-jain.com/",
      repo: "https://github.com/nimishjn/resume/",
    },
    {
      title: "Portfolio Website",
      image: "./assets/portfolio.png",
      description:
        "Portfolio website to display my skills, projects, research work, etc.",
      deploy: "https://www.nimish-jain.com/",
      repo: "https://github.com/nimishjn/portfolio/",
    },
    {
      title: "Riddler Frontend 2021",
      image: "./assets/riddler.png",
      description:
        "Frontend of Riddler game website made using reactjs framework and various npm packages.",
      deploy: "",
      repo: "https://github.com/csivitu/riddler-frontend-2021",
    },
  ];

  var allProjects = document.getElementById("all-projects");

  for (var i = 0; i < projects.length; i++) {
    var element = document.createElement("div");
    element.classList.add("project-card");
    element.innerHTML = `
            <img src="${projects[i].image}" alt="${projects[i].title}">
            <h2>${projects[i].title}</h2>
            <p>${projects[i].description}</p>
            <div class="project-buttons">
                ${
                  projects[i].deploy !== ""
                    ? `<a id="deploy-button" href="${projects[i].deploy}" target="_blank"><i class="fas fa-eye"></i> View</a>`
                    : ``
                }
                ${
                  projects[i].repo !== ""
                    ? `<a href="${projects[i].repo}" id="code-button" target="_blank"><i class="fas fa-file-code"></i> Code</a>`
                    : ``
                }
            </div>
        `;
    allProjects.appendChild(element);
  }
}

function loadResearchPage() {
  researchProfiles = [
    {
      name: "ORCID iD",
      logo: "<i class='fab fa-orcid'></i>",
      link: "https://orcid.org/0000-0001-9607-0764",
    },
    {
      name: "Google Scholar",
      logo: "<i class='fas fa-graduation-cap'></i>",
      link: "https://scholar.google.com/citations?user=oKBKRQ0AAAAJ&hl=en",
    },
    {
      name: "ResearchGate",
      logo: "<i class='fab fa-researchgate'></i>",
      link: "https://www.researchgate.net/profile/Nimish-Jain-4",
    },
    {
      name: "Publons",
      logo: "<i class='fas fa-file-powerpoint'></i>",
      link: "https://publons.com/researcher/4167049/nimish-jain/",
    },
    {
      name: "SciProfiles",
      logo: "<i class='fas fa-graduation-cap'></i>",
      link: "https://sciprofiles.com/profile/1689275",
    },
  ];

  var allResearchProfiles = document.getElementById("all-research-profiles");

  for (var i = 0; i < researchProfiles.length; i++) {
    var element = document.createElement("a");
    element.rel = "noreferrer noopener";
    element.href = `${researchProfiles[i].link}`;
    element.target = "_blank";
    element.innerHTML = `
            <div class="research-card">
                ${researchProfiles[i].logo}
                <p>${researchProfiles[i].name}</p>
                <i class="fas fa-angle-right"></i>
            </div>
        `;
    allResearchProfiles.appendChild(element);
  }

  researchPapers = [
    {
      title:
        "Modeling of Predictable Variations in Multi-Time Instant Ambient Temperature Time Series",
      link: "https://ieeexplore.ieee.org/document/9404497",
      logo: "<i class='fas fa-file-alt'></i>",
    },
  ];

  var allResearchPapers = document.getElementById("all-research-papers");

  for (var i = 0; i < researchPapers.length; i++) {
    var element = document.createElement("a");
    element.rel = "noreferrer noopener";
    element.href = `${researchPapers[i].link}`;
    element.target = "_blank";
    element.innerHTML = `
            <div class="research-card">
                ${researchPapers[i].logo}
                <p>${researchPapers[i].title}</p>
                <i class="fas fa-angle-right"></i>
            </div>
        `;
    allResearchPapers.appendChild(element);
  }
}

function darkModeSwitch() {
  var element = document.getElementById("dark-mode-switch");
  setTimeout(function () {
    element.style.opacity = 0;
    setTimeout(function () {
      if (element.name == "dark") {
        element.innerHTML = '<i class="fas fa-sun"></i>';
        element.name = "light";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--white1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--white2)"
        );
        document.documentElement.style.setProperty("--text", "var(--black1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-light)"
        );
      } else {
        element.innerHTML = '<i class="fas fa-moon"></i>';
        element.name = "dark";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--black1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--black2)"
        );
        document.documentElement.style.setProperty("--text", "var(--white1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-dark)"
        );
      }
      element.style.opacity = 1;
    }, 250);
  });
}

function openNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(-200px)";
}

function closeNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(0px)";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxhd-eQtInVaoQ_hWsLtgQSt7oEXjMMUkASrd2k-gObhuGQZx9STGuh_kX13yE9lLeVrA/exec";
const form = document.forms["say-hi-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => notification("Your message has been received!"))
    .catch((error) => notification("Some error occured on form submit!"));

  form.reset();
});

async function notification(message) {
  const element = document.createElement("div");
  element.id = "notification";
  element.innerHTML = `
    <h1>${message}</h1>
    `;
  document.querySelector("body").appendChild(element);
  setTimeout(() => {
    document.querySelector("body").removeChild(element);
  }, 5000);
}
