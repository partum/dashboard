//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//add zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        //morning
        //document.body.style.backgroundImage = "blah.jpg";
        greeting.textContent = 'Good Morning,';
    } else if(hour < 18){
        //afternoon
        greeting.textContent = 'Good Afternoon,';
    } else{
        //evening
        greeting.textContent = 'Good Evening,';
        //document.body.style.color = 'white';
    }
}

//get name
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
// function getFocus() {
//     if(localStorage.getItem('focus') === null){
//         focus.textContent = '[Enter Focus]';
//     }else{
//         focus.textContent = localStorage.getItem('focus');
//     }
// }

//set focus
// function setFocus(e) {
//     if(e.type === 'keypress') {
//         //make sure enter is pressed
//         if(e.which == 13 || e.keyCode == 13) {
//             localStorage.setItem('focus', e.target.innerText);
//             focus.blur();
//         }
//     }else{
//         localStorage.setItem('focus', e.target.innerText);
//     }
// }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
//focus.addEventListener('keypress', setFocus);
//focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
//getFocus();
console.log("test");