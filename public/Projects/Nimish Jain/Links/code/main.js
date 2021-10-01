document.addEventListener("DOMContentLoaded", () => {
    loadPage();
}, false);

async function fetchJSON(location) {
    return await fetch(location).then(async (response) => {
        return await response.json();
    });
}

async function loadPage() {
    var info = await fetchJSON("./assets/info.json");
    document.querySelector('title').innerHTML = info.name;
    document.getElementById('user-image').src = info.image;
    document.getElementById('user-name').innerHTML = info.name;
    document.getElementById('user-designation').innerHTML = info.designation;
    document.getElementById('user-heading').innerHTML = info.heading;
    await loadSkills(info.skills);
    for(var j = 0; j < info.sections.length; j++) {
        await loadSection(info.sections[j]);
    }
}

async function loadSkills(skills) {
    var ul = document.getElementById('skills-container');
    for(var i = 0; i < skills.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = skills[i];
        ul.appendChild(li);
        console.log(li);
    }
}

async function loadSection(section) {
    var body = document.getElementById('sections');
    var element = document.createElement('div');
    element.classList.add('section');
    if(section.heading !== false) {
        let heading = document.createElement('div');
        heading.classList.add('linkCardHeading');
        heading.innerHTML = section.heading;
        element.appendChild(heading);
    }
    
    for(var i = 0; i < section.links.length; i++) {
        let link = await getLinkElement(section.links[i]);
        element.appendChild(link);
    }

    body.appendChild(element);
}

async function getLinkElement(link) {
    var linkElement = document.createElement('a');
    linkElement.rel = 'noreferrer noopener';
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.innerHTML = `
    <div class="linkCard">
        ${link.icon}
        <p>${link.title}</p>
        <i class="fas fa-angle-right"></i>
    </div>
    `;
    return linkElement;
}