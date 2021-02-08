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

//email function
picture = document.getElementById('email-pic');
list = document.querySelector('ul');
let status = true;
function changeImage(){
    picture.src = status == true ? 'open.svg' : 'closed.svg';
    list.style.visibility = status == true ? 'visible' : 'hidden';
    status = !status;
}

//weather function
//most of this is from Dev Ed
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperature = document.getElementById('temperature');
    let loc = document.getElementById('location');
    const KEY = '154d616b6b9fa4a9123e0b1bea6cf23f';
    //var tempC = 999;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const tempC = data.main.temp;
                //tempC = Math.round(tempC * 10) / 10
                temperature.innerHTML = tempC + ' °C';
                const location = data.name;
                loc.innerHTML = location;
            });
        });  
    }else{
        h1.textContent = "err"
    }
});

//search
function gsearch(){
    let query = document.getElementById("search-bar").value; 
    var result = query.split(" ");
    let search = "https://www.google.com/search?q="
    result.forEach(element => {
        search += element + '+';
    });
    search = search.slice(0, -1)
    window.open(search); 
    return false;
}
//https://www.google.com/search?q=javascript+date+object+day