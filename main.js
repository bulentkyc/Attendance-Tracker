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
let daysOfYear = [];
let daysOfMonth = [];

let fillDaysOfYear =() => {
    let day = new Date(2019, 0, 1);
    daysOfYear.push(day);
    console.log(day.getTime());
    //let nextDay = new Date();
    for (i=1; i<=365; i++){
        day = new Date(day.getTime() + (24*60*60*1000));
        daysOfYear.push(day);
        if(day.getDay() == 6 || day.getDay() == 0) vacations.push(day);
    }
    console.log(daysOfYear);
    localStorage.daysOfYear = JSON.stringify(daysOfYear);
    localStorage.vacations = JSON.stringify(vacations);
}

fillDaysOfYear();

let formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('.');
}

let fillDaysOfMonth =() => {
    let day = new Date(2019, 4, 1);
    //daysOfMonth.push(day);
    //console.log(day.getTime());
    //let nextDay = new Date();
    for (i=1; i<=31; i++){
        day = new Date(day.getTime() + (24*60*60*1000));
        daysTable.innerHTML += `<tr>
                    <th scope="row">${formatDate(day)}</th>
                    <td><button class="w-100 btn btn-success" id="coming">Coming</button></td>
                    <td><button class="w-100 btn btn-danger" id="leaving">Leaving</button></td>
                    <td></td>
                    <td></td>
                </tr>`;
        day = new Date(day.getTime() + (24*60*60*1000));
        daysOfMonth.push(day);
    }
    localStorage.daysOfMonth = JSON.stringify(daysOfMonth);
}

fillDaysOfMonth();

//daysOfMonth = JSON.parse("[" + localStorage.daysOfYear + "]");
//console.log(daysOfYear);

for(item of daysOfYear){
    if(new Date(item).getMonth == new Date().getMonth){
        console.log('item');
    }
}




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
    if (islogregpage) {
        firstNameDiv.hidden = false;
        lastNameDiv.hidden = false;
        classCodeDiv.hidden = false;
        authType.innerHTML = 'Register';
        if(islogregpage) logInRegBtn.innerHTML = 'Register';
        isRegister = 'true';
    } else {
        localStorage.isLogedin = 'false';
        window.location.href = "./logreg.html";
    };
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