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
    github: ""
}

async function getUsers() {
    const response = await fetch('http://localhost:3000/api/users/')
    const data = await response.json();
    if (data[0] != undefined) {
        obj_User = data[0];
    }
    console.log(obj_User)

}

async function llenarInfo(){
await getUsers();   
document.getElementById("name-user").innerText = obj_User.name;
document.getElementById("profesion").innerText = obj_User.profesion;
document.getElementById("email-user").innerText = obj_User.email;
document.getElementById("phone-user").innerText = obj_User.phone    ;
document.getElementById("adress-user").innerText = obj_User.dress;
document.getElementById('description-user').innerText = obj_User.description;
document.getElementById('git-user').setAttribute('href', "https://www.github.com/"+obj_User.github);
document.getElementById('linkedin-user').setAttribute('href', "https://www.linkedin.com/"+obj_User.linkedin);
document.getElementById('fb-user').setAttribute('href', "https://www.facebook.com/"+obj_User.facebook);
document.getElementById('twitter-user').setAttribute('href', "https://www.github.com/"+obj_User.twitter);
document.getElementById('img-user')
}






