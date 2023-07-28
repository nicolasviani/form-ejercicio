const dataBase = [
    {
        email: "tomas_sanchez@gmail.com",
        password: "vivalaprogramacion",
        confirmPassword: "vivalaprogramacion",
    },
    {
        email: "viani.nicolas.87@gmail.com",
        password: "nataliteamo",
        confirmPassword: "nataliteamo",
    },
    {
        email: "natali_g_molina@gmail.com",
        password: "fionateamo",
        confirmPassword: "fionateamo",
    },
];

const eMail = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const sendButton = document.querySelector("#send");

const newUsers = {
    email:"",
    password:"",
    confirmPassword:"",
};

eMail.addEventListener("input", (event) =>{
    newUsers.email = event.target.value
});

password.addEventListener("input", (event) =>{
    newUsers.password = event.target.value
});


confirmPassword.addEventListener("input", (event) =>{
    newUsers.confirmPassword = event.target.value

    if(password !== confirmPassword){
        console.log("clave incorrecta")
    }else {
        console.log("usuario correcto");
    }
});

sendButton.addEventListener("click",() => {
    const userFound = dataBase.find(eMail => eMail.email == newUsers.email && eMail.password == newUsers.password && eMail.confirmPassword == newUsers.confirmPassword);

    if(userFound == undefined){
        alert("No estas logeado");
    }else{
        const container = document.querySelector(".inputs-container");
        container.innerHTML = `<span class= "bienbenida"> Bienvenido sr/sra ${userFound.email}</span>`
    }
});
