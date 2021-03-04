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
let arraySkills = [{name: "Select Option"},{name:"Add Skill"}];

let arraySoftwares = [{name:"Select Option"},{name:"Add Software"}];
let arraySchools = [{name:"Select School"},{name:"Add School"}];
let arrayWorks = [{
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
    let newObj={
        ...obj_User,
        arraySchools,
        arraySkills,
        arraySoftwares,
        arrayWorks
    }

    console.log(newObj);

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
    var school = arraySchools;
    var select = document.getElementById("select_school");

    for (var i = 0; i < school.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = school[i].name;
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
        document.getElementById('input-new-soft').value = "";
    }

}

function select_skill() {
    let skillPosition = document.getElementById('select_skills').value;
    if (skillPosition == 0) {
        document.getElementById('div-skills').style.display = "none";
    }
    else {
        document.getElementById('div-skills').style.display = "block";
    }


    if (skillPosition > 1) {
        document.getElementById('btn-add-skill').innerHTML = "Editar"
        document.getElementById('input-skill').value = arraySkills[skillPosition].name;
    } else {
        document.getElementById('btn-add-skill').innerHTML = "Añadir"
        document.getElementById('input-skill').value = "";
    }
}


function select_school() {
    let school = document.getElementById('select_school').value;
    if (school == 0) {
        document.getElementById('add_school').style.display = "none";
    }
    else {
        document.getElementById('add_school').style.display = "block";

    }
    if (school > 1) {
        document.getElementById('btn-add-school').innerHTML = "Editar"
        document.getElementById('input-new-schol').value = arraySchools.name;
        document.getElementById('school_description').value = arraySchools.description;
        document.getElementById('input-new-schol').value = arraySchools.tittle;

    } else {
        document.getElementById('btn-add-school').innerHTML = "Añadir"
    }
}



function add_skill() {
    let name = document.getElementById('input-skill').value;
    let domain = document.getElementById('range-skill').value;
    let obj_skill = {
        name: name,
        domain: domain
    }
    let newOption = document.createElement("option");
    arraySkills.push(obj_skill);
    newOption.innerHTML = arraySkills[arraySkills.length-1].name;
    newOption.value = arraySkills.length-1;
    console.log(arraySkills);   
    select_skills.appendChild(newOption);
    
    document.getElementById('div-skills').style.display = "none";
}


function add_soft() {
    let name = document.getElementById('input-new-soft').value;
    let domain = document.getElementById('range-soft').value;
    let obj_soft = {
        name: name,
        domain: domain
    }
    arraySoftwares.push(obj_soft);
    option.innerHTML = arraySoftwares[arraySoftwares.length-1].name;
    option.value = arraySoftwares.length-1;
    select_software.appendChild(option);
    document.getElementById('add-software').style.display = "none";
    alert("El dato se agrego correctamente")
}


function add_school() {
    let name = document.getElementById('input-new-soft').value;
    let description = document.getElementById('school_description').value;
    let title = document.getElementById('title_school').value;
    let obj_school = {
    name: name,
    description: description,
    title: title
    }
    arraySchools.push(obj_school);
    option.innerHTML = arraySchools[arraySchools.length-1].name;
    option.value = arraySchools.length-1;
    select_school.appendChild(option);  
    document.getElementById('add-software').style.display = "none";
    alert("El dato se agrego correctamente")
}


