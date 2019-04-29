let isRegister = 'true';

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
    firstNameDiv.hidden = true;
    lastNameDiv.hidden = true;
    classCodeDiv.hidden = true;
    authType.innerHTML = 'Login';
    logInRegBtn.innerHTML = 'Login';
    isRegister = 'false';
}

logInReg.addEventListener('click', showLogin);

let showReg = () => {
    firstNameDiv.hidden = false;
    lastNameDiv.hidden = false;
    classCodeDiv.hidden = false;
    authType.innerHTML = 'Register';
    logInRegBtn.innerHTML = 'Register';
    isRegister = 'true';
}

reg.addEventListener('click', showReg);

let checkLogin = () => {
    if (localStorage.isLogedin == 'true') {
        logInReg.innerHTML = 'Logout';
        salute.innerHTML = `Hello ${localStorage.userName}`;
        //content.hidden = false;
        authPopup.hidden = true;
    }else {
        logInReg.innerHTML = 'Login';
        salute.innerHTML = 'Hello, please login or register';
        //content.hidden = true;
        authPopup.hidden = false;
    }
}

checkLogin();

let authantication = () => {

}

let register= () => {
    person.id ='1';
    person.photo = './assets/personal-photos/1.jpg';
    person.name = 'firstName.value';
    person.lastName = 'lastName.value';
    person.email = 'email.value';
    person.className = 'classCode.value';

    dataArr.push(JSON.stringify(person));

    localStorage.email = email.value;
    localStorage.pass = pass.value;
    localStorage.data = dataArr;
}

let submit = () => {
    alert('ddd');
    if(isRegister == 'true') {
        register();
    } else {
        authantication();
    }
}

logInRegBtn.addEventListener('click', submit);