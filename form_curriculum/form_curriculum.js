const selector_skills = document.getElementById("select_skills");
const selector_schools = document.getElementById('selector_school');
const selector_works = document.getElementById("selector_works")
const selector_soft = document.getElementById("select_software")

const input_name = document.getElementById('name-user');
const input_profesion = document.getElementById('profesion');
const input_description = document.getElementById('description-user');
const input_email = document.getElementById('email-user');
const input_phone = document.getElementById('phone-user');
const input_dress = document.getElementById('dress-user');
const input_birthDate = document.getElementById('birth-date');
const input_linked = document.getElementById('linked-user');
const input_git = document.getElementById('git-user');
const input_twitter = document.getElementById('twitter-user');
const input_facebook = document.getElementById('fb-user');
const img_container = document.getElementById('img_user');

const ENDPOINT = 'https://curriculumivanproject.herokuapp.com/api/'

let obj_User = {
    id: null,
    name: "",
    imgProfile: null,
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
let arraySkills = [{ id: -2, name: "Select Option" }, { id: -1, name: "Add Skill" }];
let arraySoftwares = [{ name: "Select Option" }, { name: "Add Software" }];
let arraySchools = [{ name: "Select School" }, { name: "Add School" }];
let arrayWorks = [{ name: "Select Option" }, { name: "Add Work" }];

async function update_data() {
    obj_User.name = input_name.value;
    obj_User.profesion = input_profesion.value;
    obj_User.description = input_description.value;
    obj_User.birthDate = input_birthDate.value
    obj_User.email = input_email.value;
    obj_User.phone = input_phone.value;
    obj_User.dress = input_dress.value;
    obj_User.linkedin = input_linked.value;
    obj_User.github = input_git.value;
    obj_User.twitter = input_twitter.value;
    obj_User.facebook = input_facebook.value;
    let skills = arraySkills.splice(0, 2);
    let softwares = arraySoftwares.splice(0, 2);
    let schools = arraySchools.splice(0, 2);
    let works = arrayWorks.splice(0, 2);


    for (let i = 0; i < arraySkills.length; i++) {
        if (arraySkills[i].id == 0) {
            await postSkill(arraySkills[i]);
        }
    }
    
    for (let i = 0; i < arraySoftwares.length; i++) {
        if (arraySoftwares[i].id == 0) {
            await postSoftware(arraySoftwares[i]);
        }
    }
    
    for (let i = 0; i < arraySchools.length; i++) {
        if (arraySchools[i].id == 0) {
            await postSchool(arraySchools[i]);
        }
    }

    for (let i = 0; i < arrayWorks.length; i++) {
        if (arrayWorks[i].id == 0) {
            await postWorks(arrayWorks[i]);
        }
    }

    if (obj_User.id == null) {
        await postData(obj_User);
        alert("Se agregaron los datos correctamente");
        location.reload();
    } else {
        await editData(obj_User);
        alert('Se guardaron los cambios correctamente');
        location.reload();
    }


}




async function postData(obj) {
    fetch(ENDPOINT+'users', {
        method: 'post',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function editData(obj) {
    fetch(ENDPOINT+'users/' + obj_User.id, {
        method: 'put',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));

}

function obtener_imagen(e) {
    e.preventDefault();
    let reader = new FileReader();
    reader.onload = function (e) {
        let filePreview = e.target.result;
        img_container.src = filePreview;
        obj_User.imgProfile = filePreview;
    }
    reader.readAsDataURL(e.target.files[0]);

}

async function cargar_selects() {
    await getUsers();
    await getSkills();
    await getSchools();
    await getSoftware();
    await getWorks()
    cargar_datos();
    cargar_software();
    cargar_works();
    cargar_skills();
    cargar_schools();

}

function cargar_datos() {
    if (obj_User.id != null) {
        try {
            input_name.value = obj_User.name;
            input_profesion.value = obj_User.profesion;
            input_description.value = obj_User.description;
            input_birthDate.value = obj_User.birthDate;
            input_email.value = obj_User.email;
            input_phone.value = obj_User.phone;
            input_dress.value = obj_User.dress;
            input_linked.value = obj_User.linkedin;
            input_git.value = obj_User.github;
            input_twitter.value = obj_User.twitter;
            input_facebook.value = obj_User.facebook;
            img_container.setAttribute('src', obj_User.imgProfile);
        } catch (error) {

        }

    }
}

function cargar_software() {
    var software = arraySoftwares;
    var select = document.getElementById("select_software");

    for (var i = 0; i < software.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = software[i].name;
        option.value = i;
        select.appendChild(option); //sele asigna el option como hijo al select
    }
}
function cargar_skills() {
    var skill = arraySkills;
    for (var i = 0; i < skill.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = skill[i].name;
        option.value = i;
        option.setAttribute('id', skill.id);
        selector_skills.appendChild(option);
    }
}
function cargar_works() {
    var work = arrayWorks;
    for (var i = 0; i < work.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = work[i].name;
        option.value = i;
        selector_works.appendChild(option);
    }
}
function cargar_schools() {
    var school = arraySchools;
    for (var i = 0; i < school.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = school[i].name;
        option.value = i;
        option.setAttribute('id', school.id);
        selector_schools.appendChild(option);
    }
}

function select_work() {
    let workPosition = selector_works.value;
    if (workPosition == 0) {
        document.getElementById('add_work').style.display = "none";
    }
    else {
        document.getElementById('add_work').style.display = "block";
        document.getElementById('delete-work').style.display = "block"

    }

    if (workPosition > 1) {
        document.getElementById('btn-add-work').innerHTML = "Editar"
        document.getElementById('new-work').value = arrayWorks[workPosition].name;
        document.getElementById('description-work').value = arrayWorks[workPosition].jobDescription;
        document.getElementById('job-name').value = arrayWorks[workPosition].job;
    } else {
        document.getElementById('btn-add-software').innerHTML = "Añadir"
        document.getElementById('delete-work').style.display = "none"

        document.getElementById('input-new-soft').value = "";
    }

}

function clearFormWorks(){
    document.getElementById('new-work').value = "";
        document.getElementById('description-work').value = "";
        document.getElementById('job-name').value = "";
}

function clearFormSchools(){
    document.getElementById('input-new-school').value = "";
        document.getElementById('school_description').value = "";
        document.getElementById('title_school').value = "";
}
function select_soft() {
    let softwarePosition = document.getElementById("select_software").value;
    if (softwarePosition >= 1) {
        if (arraySoftwares.length == 6 && softwarePosition == 1) {
            alert('Solo puedes agregar 4 softwares   \n Consejo: tambien puede editar elementos ya creados');
        } else {
            document.getElementById('add-software').style.display = "block";
            document.getElementById('btn-del-soft').style.display = "block";

        }
    } else {
        document.getElementById('add-software').style.display = "none";
    }
    if (softwarePosition > 1) {
        document.getElementById('btn-add-software').innerHTML = "Editar"
        document.getElementById('input-new-soft').value = arraySoftwares[softwarePosition].name;
    } else {
        document.getElementById('btn-del-soft').style.display = "none";

        document.getElementById('btn-add-software').innerHTML = "Añadir"
        document.getElementById('input-new-soft').value = "";
    }

}

function select_skill() {
    let skillPosition = document.getElementById('select_skills').value;
    if (skillPosition >= 1) {
        if (arraySkills.length == 6 && skillPosition == 1) {
            alert('Solo puedes agregar 4 skills \n Consejo: tambien puede editar elementos ya creados');
        } else {
            document.getElementById('div-skills').style.display = "block";
        }
    }
    else {
        document.getElementById('div-skills').style.display = "none";
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
    let schoolPosition = selector_schools.value;
    if (schoolPosition == 0) {
        document.getElementById('add_school').style.display = "none";
    }
    else {
        document.getElementById('add_school').style.display = "block";
        document.getElementById('delete-school').style.display = "block";

    }
    if (schoolPosition > 1) {
        document.getElementById('btn-add-school').innerHTML = "Editar"

        document.getElementById('input-new-school').value = arraySchools[schoolPosition].name;
        document.getElementById('school_description').value = arraySchools[schoolPosition].description;
        document.getElementById('title_school').value = arraySchools[schoolPosition].title;
    } else {
        document.getElementById('btn-add-school').innerHTML = "Añadir"
        document.getElementById('input-new-school').value = "";
        document.getElementById('school_description').value = "";
        document.getElementById('title_school').value = "";
        document.getElementById('delete-school').style.display = "none";

    }
}


function add_skill() {
    let skillPosition = document.getElementById('select_skills').value;

    let name = document.getElementById('input-skill').value;
    let domain = document.getElementById('range-skill').value;
    if(name.value = undefined){
        alert("dato vacio")
    }
    let obj_skill = {
        id: 0,
        name: name,
        domain: domain
    }
        if (arraySkills[skillPosition].id > 0) {
            obj_skill.id = arraySkills[skillPosition].id;
            putSkill(obj_skill);
            alert('Los cambios se reflejaran al guardar');
        } else {
            let newOption = document.createElement("option");
            arraySkills.push(obj_skill);
            newOption.innerHTML = arraySkills[arraySkills.length - 1].name;
            newOption.setAttribute('id', 0);
            console.log(arraySkills);
            selector_skills.appendChild(newOption);
            alert("El dato se agrego correctamente");
        }
        document.getElementById('div-skills').style.display = "none";
        document.getElementById('input-skill').value = "";
        selector_skills.selectedIndex ="0";

    }
    


function add_soft() {
    let softwarePosition = document.getElementById("select_software").value;
    let name = document.getElementById('input-new-soft').value;
    let domain = document.getElementById('range-soft').value;
    
    let obj_soft = {
        id: 0,
        name: name,
        domain: domain
    }
    if(name.value ==""){
        alert('Faltan datos por llenar')
    }
    if (arraySoftwares[softwarePosition].id > 0) {
        obj_soft.id = arraySoftwares[softwarePosition].id;
        putSoft(obj_soft);
        alert('Los cambios se reflejaran al guardar');
    } else {
        let newOption = document.createElement("option");
        arraySoftwares.push(obj_soft);
        newOption.innerHTML = arraySoftwares[arraySoftwares.length - 1].name;
        newOption.value = arraySoftwares.length - 1;
        select_software.appendChild(newOption);
        alert("El dato se agrego correctamente");
    }
    document.getElementById('add-software').style.display = "none";
    document.getElementById('input-new-soft').value = "";
    select_software.selectedIndex ="0";
}

function add_school() {
    let schoolPosition = selector_schools.value;

    let name = document.getElementById('input-new-school').value;
    let description = document.getElementById('school_description').value;
    let title = document.getElementById('title_school').value;
    let obj_school = {
        id: 0,
        name: name,
        description: description,
        title: title
    }

    if (arraySchools[schoolPosition].id > 0) {
        obj_school.id = arraySchools[schoolPosition].id;
        putSchool(obj_school);
        alert('Los cambios se reflejaran al guardar');
    } else {
        arraySchools.push(obj_school);
        let newOption = document.createElement("option");
        newOption.innerHTML = arraySchools[arraySchools.length - 1].name;
        newOption.value = arraySchools.length - 1;
        selector_schools.appendChild(newOption);
        console.log(arraySchools);
        alert("El dato se agrego correctamente");
    }
    document.getElementById('add_school').style.display = "none";
    selector_schools.selectedIndex ="0"
    
}

function add_work() {
    let workPosition = selector_works.value;
    let obj_work = {
        id:0,
        name: document.getElementById('new-work').value,
        jobDescription: document.getElementById('description-work').value,
        job: document.getElementById('job-name').value,
    }
    if (arrayWorks[workPosition].id > 0) {
        obj_work.id = arrayWorks[workPosition].id;
        putWork(obj_work);
        alert('Los cambios se reflejaran al guardar');
    } else {
    arrayWorks.push(obj_work);
    let newOption = document.createElement("option");
    newOption.innerHTML = arrayWorks[arrayWorks.length - 1].name;
    newOption.value = arraySchools.length - 1;
    selector_works.appendChild(newOption);
    alert("El dato se agrego correctamente");
    }
    clearFormWorks();
    document.getElementById('add_work').style.display = "none";
    selector_works.selectedIndex = "0";
}

function cancel() {
    var mensaje;
    var opcion = confirm("Deseas salir de edicion?\n Perderas los cambios no guardados");
    if (opcion == true) {
        location.href = "http://127.0.0.1:5500/"
    } else {
    }
}


//Funciones para conectar con el server
async function getUsers() {
    const response = await fetch(ENDPOINT+'users')
    const data = await response.json();
    if (data[0] != undefined) {
        obj_User = data[0];
    }
    console.log(obj_User);

}

async function getSkills() {
    const response = await fetch(ENDPOINT+'skills/')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySkills.push(data[i]);
        }
    }
}

async function getSchools() {
    const response = await fetch(ENDPOINT+'schools')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySchools.push(data[i]);
        }
    }
    console.log(arraySchools);
}

async function getWorks() {
    const response = await fetch(ENDPOINT+'works')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arrayWorks.push(data[i]);
        }
    }
    console.log(arrayWorks);
}

async function getSoftware() {
    const response = await fetch(ENDPOINT+'softwares')
    const data = await response.json();
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            arraySoftwares.push(data[i]);
        }
    }
    console.log(arraySoftwares);
}


async function putSkill(obj) {
    fetch(ENDPOINT+'skills/' + obj.id, {
        method: 'put',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function putSoft(obj) {
    fetch(ENDPOINT+'softwares/' + obj.id, {
        method: 'put',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function putWork(obj) {
    fetch(ENDPOINT+'works/' + obj.id, {
        method: 'put',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function putSchool(obj) {
    fetch(ENDPOINT+'schools/' + obj.id, {
        method: 'put',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}


async function postSkill(obj) {
    fetch(ENDPOINT+'skills', {
        method: 'post',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function postSchool(obj) {
    fetch(ENDPOINT+'schools', {
        method: 'post',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function postSoftware(obj) {
    fetch(ENDPOINT+'softwares', {
        method: 'post',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function postWorks(obj) {
    fetch(ENDPOINT+'works', {
        method: 'post',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(res => console.log(res));
}

async function deleteSchool() {
    var opcion = confirm("¿Desea eliminar este dato?");
    if (opcion == true) {
        let position = selector_schools.value;
    let obj = arraySchools[position];
    console.log(position)
   await fetch(ENDPOINT+'schools' + obj.id, {
        method: 'delete',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        }
    }).then(res => res.json())
        .then(res => console.log(res));
    } else {
    }

    location.reload();
}

async function deleteSoft() {
    var opcion = confirm("¿Desea eliminar este dato?");
    if (opcion == true) {
        let position = selector_soft.value;
    let obj = arraySoftwares[position];
    console.log(position)
   await fetch(ENDPOINT+'softwares' + obj.id, {
        method: 'delete',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        }
    }).then(res => res.json())
        .then(res => console.log(res));
    } else {
    }

    location.reload();
}

async function deleteWork() {
    var opcion = confirm("¿Desea eliminar este dato?");
    if (opcion == true) {
        let position = selector_works.value;
    let obj = arrayWorks[position];
    console.log(position)
   await fetch(ENDPOINT+'works' + obj.id, {
        method: 'delete',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        }
    }).then(res => res.json())
        .then(res => console.log(res));
    } else {
    }

    location.reload();
}

async function deleteSkill() {
    var opcion = confirm("¿Desea eliminar este dato?");
    if (opcion == true) {
        let position = selector_skills.value;
    let obj = arraySkills[position];
    console.log(position)
   await fetch(ENDPOINT+'skills' + obj.id, {
        method: 'delete',
        headers: {
            'mode': 'no-cors',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

        }
    }).then(res => res.json())
        .then(res => console.log(res));
    } else {
    }

    location.reload();
}