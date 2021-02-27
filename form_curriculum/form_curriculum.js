document.getElementById('add-software').style.display = "none";
document.getElementById('div-skills').style.display = "none"

let obj_User = {
    name: "",
    img: null,
    profesion: "",
    descripcion: "",
    email: "",
    phone: "",
    dress: "",
    works: [],
    skills: [],
    softwares: [],
}

let obj_work = {
    enterpriseName: "",
    startDate: "",
    endDate: "",
    description: ""
}

let obj_software = {
    softwareName: "",
    experienceLvl: ""
}


function cargar_selects(){
    cargar_software();
    cargar_works();
    cargar_skills();
    cargar_schools();
}

function cargar_software() {
    var software = ["Select option", "Add Software"]; 
    var select = document.getElementById("select_software"); 
    
    for(var i=0; i < software.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = software[i]; 
        select.appendChild(option); 
    }
}
function cargar_skills() {
    var skill = ["Select option", "Add Skill"]; 
    var select = document.getElementById("select_skills");
    
    for(var i=0; i < skill.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = skill[i]; 
        select.appendChild(option);
    }
}
function cargar_works() {
    var work = ["Select option", "Add Work"]; 
    var select = document.getElementById("select_works");
    
    for(var i=0; i < work.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = work[i]; 
        select.appendChild(option);
    }
}

function cargar_schools() {
    var school = ["Select option", "Add School"]; 
    var select = document.getElementById("select_school");
    
    for(var i=0; i < school.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = school[i]; 
        select.appendChild(option);
    }
}


function update_data() {
    obj_User.name = document.getElementById('name-user').value;
    obj_User.imagen = document.getElementById('img-picker').onchange.value;
    obj_User.profesion = document.getElementById('profesion').value;
    obj_User.email = document.getElementById('email-user').value;
    obj_User.phone = document.getElementById('phone-user').value;
    obj_User.email = document.getElementById('dress-user').value;
}

