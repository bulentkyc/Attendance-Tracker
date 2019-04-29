let isRegister = 'true';
let page = window.location.pathname;
let fields = page.split('/');
page = fields.pop();
let islogregpage = false;
if (page == 'logreg.html') {
    islogregpage = true;
}

let days = {
    date:'',
    isVacation:'',
    comingTime:'',
    leavingTime:'',
    status:''
};
let person = {
    id:'',
    photo:'',
    name:'',
    lastName:'',
    email:'',
    className:'',
    days:[]
};
let dataArr = [];
let vacations = [];

let showLogin = () => {
    if(localStorage.isLogedin == 'true'){
        localStorage.isLogedin = 'false';
        window.location.href = "./logreg.html";
    }
    if (islogregpage) {
        firstNameDiv.hidden = true;
        lastNameDiv.hidden = true;
        classCodeDiv.hidden = true;
        authType.innerHTML = 'Login';
        if(islogregpage) logInRegBtn.innerHTML = 'Login';
        isRegister = 'false';
    }
    
}

logInReg.addEventListener('click', showLogin);

let showReg = () => {
    firstNameDiv.hidden = false;
    lastNameDiv.hidden = false;
    classCodeDiv.hidden = false;
    authType.innerHTML = 'Register';
    if(islogregpage) logInRegBtn.innerHTML = 'Register';
    isRegister = 'true';
}

reg.addEventListener('click', showReg);

let checkLogin = () => {
    if (localStorage.isLogedin == 'true') {
        logInReg.innerHTML = 'Logout';
        salute.innerHTML = `Hello ${localStorage.email}`;
        if (page != 'main.html') {
            window.location.href = "./main.html";
        }
    }else {
        logInReg.innerHTML = 'Login';
        salute.innerHTML = 'Hello, please login or register';
    }
}

checkLogin();

let authantication = () => {
    if(localStorage.email == email.value &&
    localStorage.pass == pass.value){
        localStorage.isLogedin = 'true';
        checkLogin();
    } else {
        localStorage.isLogedin = 'false';
        alert('User name or password does not match!');
        checkLogin();
    }
}

let register = () => {
    person.id ='1';
    person.photo = './assets/personal-photos/1.jpg';
    person.name = firstName.value;
    person.lastName = lastName.value;
    person.email = email.value;
    person.className = classCode.value;

    dataArr.push(JSON.stringify(person));

    localStorage.email = email.value;
    localStorage.pass = pass.value;
    localStorage.data = dataArr;
}

let submit = () => {
    if(isRegister == 'true') {
        register();
    } else {
        authantication();
    }
}

if(islogregpage) {logInRegBtn.addEventListener('click', submit)};