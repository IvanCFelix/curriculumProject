const option = document.createElement("option");
const select_skills = document.getElementById("select_skills");

let obj_User = {
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
    github: ""
}
let arraySkills = [{
    name: "Select Option"},{name:"Add Skill"}];

let arraySoftwares = [{name:"Select Option"},{name:"Add Software"}];
let schools = [{
    name: "",
    description: "",
    title: "",
}];
let works = [{
    name: "",
    description: "",
    job: "",
}];


function update_data() {
    obj_User.name = document.getElementById('name-user').value;
    obj_User.profesion = document.getElementById('profesion').value;
    obj_User.description = document.getElementById('description-user').value;
    obj_User.email = document.getElementById('email-user').value;
    obj_User.phone = document.getElementById('phone-user').value;
    obj_User.dress = document.getElementById('dress-user').value;
    obj_User.birthDate = document.getElementById('birth-date').value;
    console.log(obj_User);
}

function cargar_selects() {
    cargar_software();
    cargar_works();
    cargar_skills();
    cargar_schools();
}
function cargar_software() {
    var software = arraySoftwares;
    var select = document.getElementById("select_software");

    for (var i = 0; i < software.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = software[i].name;
        option.value = i;
        select.appendChild(option);
    }
}
function cargar_skills() {
    var skill = arraySkills;
    for (var i = 0; i < skill.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = skill[i].name;
        option.value = i;
        select_skills.appendChild(option);
    }
}
function cargar_works() {
    var work = ["Select option", "Add Work"];
    var select = document.getElementById("select_works");

    for (var i = 0; i < work.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = work[i];
        option.value = i;
        select.appendChild(option);
    }
}
function cargar_schools() {
    var school = ["Select option", "Add School"];
    var select = document.getElementById("select_school");

    for (var i = 0; i < school.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = school[i];
        option.value = i;
        select.appendChild(option);
    }
}

function select_soft() {
    let software = document.getElementById("select_software").value;
    if (software == 0) {
        document.getElementById('add-software').style.display = "none";
    }
    else {
        document.getElementById('add-software').style.display = "block";
    }
    if (software > 1) {
        document.getElementById('btn-add-software').innerHTML = "Editar"
        document.getElementById('input-new-soft').value = obj_User.softwares[0].name;
    } else {
        document.getElementById('btn-add-software').innerHTML = "Añadir"
    }

}

function select_skill() {
    let skill = document.getElementById('select_skills').value;
    if (skill == 0) {
        document.getElementById('div-skills').style.display = "none";
    }
    else {
        document.getElementById('div-skills').style.display = "block";

    }
    if (skill > 1) {
        document.getElementById('btn-add-skill').innerHTML = "Editar"
        document.getElementById('input-new-soft').value = obj_User.softwares[0].name;
    } else {
        document.getElementById('btn-add-skill').innerHTML = "Añadir"
    }
}


function add_skill() {
    let name = document.getElementById('input-skill').value;
    let domain = document.getElementById('range-skill').value;
    let obj_skill = {
        name: name,
        domain: domain
    }
    arraySkills.push(obj_skill);
    option.innerHTML = arraySkills[arraySkills.length-1].name;
    option.value = arraySkills.length-1;
    select_skills.appendChild(option);
    document.getElementById('div-skills').style.display = "none";

}




