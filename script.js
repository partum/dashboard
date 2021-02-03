//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
goal1 = document.getElementById('goal-1'),
goal2 = document.getElementById('goal-2'),
goal3 = document.getElementById('goal-3');

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
function getFocus() {
    if(localStorage.getItem('goal-1') === null){
        goal1.textContent = '[Enter Goal]';
    }else{
        goal1.textContent = localStorage.getItem('goal-1');
    }
    if(localStorage.getItem('goal-2') === null){
        goal2.textContent = '[Enter Goal]';
    }else{
        goal2.textContent = localStorage.getItem('goal-2');
    }
    if(localStorage.getItem('goal-3') === null){
        goal3.textContent = '[Enter Goal]';
    }else{
        goal3.textContent = localStorage.getItem('goal-3');
    }
}

//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem(this.id, e.target.innerText);
            if(this.id=='goal-1'){
                goal1.blur(); 
            }
            else if(this.id=='goal-2'){
                goal2.blur(); 
            }
            else if(this.id=='goal-3'){
                goal3.blur(); 
            }   
        }
    }else{
        localStorage.setItem(this.id, e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goal1.addEventListener('keypress', setFocus);
goal1.addEventListener('blur', setFocus);
goal2.addEventListener('keypress', setFocus);
goal2.addEventListener('blur', setFocus);
goal3.addEventListener('keypress', setFocus);
goal3.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();
