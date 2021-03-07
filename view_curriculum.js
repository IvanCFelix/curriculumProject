const txtName = document.getElementById('name-user');
const profesion = document.getElementById('profesion');
const email = document.getElementById('email-user');
const phone = document.getElementById('phone-user');
const dress = document.getElementById('dress-user');
const birthDate = document.getElementById('birth-date');
const linked = document.getElementById('linked-user');
const git = document.getElementById('git-user');
const twitter = document.getElementById('twitter-user');
const facebook = document.getElementById('fb-user');
const ENDPOINT = 'https://curriculumivanproject.herokuapp.com/api/'

let arraySchools = [];
let arrayWorks = [];
let arraySoftwares = [];
let arraySkills = [];

let obj_User = {
    id: null,
    name: "",
    img: null,
    profesion: "",
    description: "",
    email: "",
    phone: "",
    dress: "",
    birthDate: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "",
    imgProfile: ""
}



async function getUsers() {
    const response = await fetch(ENDPOINT + 'users')
    const data = await response.json();
    if (data[0] != undefined) {
        obj_User = data[0];
    }
    console.log(obj_User)

}


async function getSchools() {
    const response = await fetch(ENDPOINT + 'schools')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySchools.push(data[i]);
        }
    }
    console.log(arraySchools);
}

async function getSoftware() {
    const response = await fetch(ENDPOINT + 'softwares')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySoftwares.push(data[i]);
        }
    }
    console.log(arraySoftwares);
}

async function getSkills() {
    const response = await fetch(ENDPOINT + 'skills')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySkills.push(data[i]);
        }
        console.log(arraySkills)
    }
}

async function getWorks() {
    const response = await fetch(ENDPOINT + 'works')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arrayWorks.push(data[i]);
        }
    }
    console.log(arrayWorks);
}


async function llenarInfo() {
    await getUsers();
   
    showSchools();
    showWorks();
    showSoft();
    showSkills();
    document.getElementById("name-user").innerText = obj_User.name;
    document.getElementById("profesion").innerText = obj_User.profesion;
    document.getElementById("birth-date").innerText = obj_User.birthDate;
    document.getElementById("email-user").innerText = obj_User.email;
    document.getElementById("phone-user").innerText = obj_User.phone;
    document.getElementById("adress-user").innerText = obj_User.dress;
    document.getElementById('description-user').innerText = obj_User.description;
    document.getElementById('git-user').setAttribute('href', "https://www.github.com/" + obj_User.github);
    document.getElementById('linkedin-user').setAttribute('href', "https://www.linkedin.com/" + obj_User.linkedin);
    document.getElementById('fb-user').setAttribute('href', "https://www.facebook.com/" + obj_User.facebook);
    document.getElementById('twitter-user').setAttribute('href', "https://www.github.com/" + obj_User.twitter);
    document.getElementById('img-user').setAttribute('src', obj_User.imgProfile)
}


async function showSchools() {
    await getSchools();
    arraySchools.map((item) => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const span = document.createElement('span');
        h4.innerText = item.name;
        p.innerText = item.title;
        span.innerText = item.description;
        const container = document.getElementById('school-list');
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(span);
        container.appendChild(div);
    });
}

async function showWorks() {
    await getWorks();
    arrayWorks.map((item) => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const span = document.createElement('span');
        h4.innerText = item.job;
        p.innerText = item.name;
        span.innerText = item.jobDescription;
        const container = document.getElementById('works-list');
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(span);
        container.appendChild(div);
    });
}


async function showSoft() {
    await getSoftware();
    arraySoftwares.map((item) => {
        const p = document.createElement('p');
        p.innerText = item.name;
        const img = document.createElement('img');
        const div = document.createElement('div');

        switch (item.domain) {
            case 1:
                img.src = "Assets/Rombos_domain/1.png"
                break;
            case 2:
                img.src = "Assets/Rombos_domain/2.png"
                break;
            case 3:
                img.src = "Assets/Rombos_domain/3.png"
                break;
            case 4:
                img.src = "Assets/Rombos_domain/4.png"
                break;
            case 5:
                img.src = "Assets/Rombos_domain/5.png"
                break;
        }
        img.className = "domain-view"
        div.className = 'soft-list-area1'
        div.appendChild(p);
        div.appendChild(img);
        const rangesContainer = document.getElementById('soft-list');
        rangesContainer.appendChild(div);
        
    });
}

async function showSkills() {
    await getSkills();
    arraySkills.map((item) => {
        const p = document.createElement('p');
        p.innerText = item.name;
        const img = document.createElement('img');
        const div = document.createElement('div');
        switch (item.domain) {
            case 1:
                img.src = "Assets/Rombos_domain/1.png"
                break;
            case 2:
                img.src = "Assets/Rombos_domain/2.png"
                break;
            case 3:
                img.src = "Assets/Rombos_domain/3.png"
                break;
            case 4:
                img.src = "Assets/Rombos_domain/4.png"
                break;
            case 5:
                img.src = "Assets/Rombos_domain/5.png"
                break;
        }
        div.className = 'skill-list-area1';
        img.className = "domain-view"
        //const namesContainer = document.getElementById('skill-names');
        const rangesContainer = document.getElementById('skill-list');
        div.appendChild(img);
        div.appendChild(p);
        rangesContainer.appendChild(div);
    });
}










