document.getElementById('add-software').style.display="none";
document.getElementById('div-skills').style.display ="none"

let obj_User ={
    name: "",
    img: null,
    profesion: "",
    descripcion:"",
    email:"",
    phone: "",
    dress:"",
    works: [],
    skills: [],
    softwares:[],
    }

    let obj_work = {
    enterpriseName: "",
    startDate:"",
    endDate:"",
    description:""
    }

    let obj_software = {
        softwareName:"",
        experienceLvl:""
    }
    

function  update_data(){
    obj_User.name = document.getElementById('name-user').value;
    obj_User.imagen = document.getElementById('img-picker').onchange.value;
    obj_User.profesion = document.getElementById('profesion').value;
    obj_User.email = document.getElementById('email-user').value;
    obj_User.phone = document.getElementById('phone-user').value;
    obj_User.email = document.getElementById('dress-user').value;
}
