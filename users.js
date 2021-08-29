/* for default user info */

fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => display(data.results))

/* For changing user  */

const Submit = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => display(data.results))
}
const display = data => {
    const container = document.getElementById('container');
    const div = document.createElement('div');

    data.forEach(item => {
        container.innerHTML = `<img  src="${item.picture.large}" alt="">
   <div id="info">
        <p>My <span id="span" >Name is</span></p>
        <h3 id="h3">${item.name.title} ${item.name.first} ${item.name.last}</h3>
   </div>
   <div class="icons">
   <i onmouseover="ShowUser('${item.name.title} ${item.name.first} ${item.name.last}')" class="fas fa-user"></i>
   <i onmouseover="ShowEmail('${item.email}')" class="fas fa-envelope"></i>
   <i onmouseover="ShowPhone('${item.phone}')" class="fas fa-phone"></i>
   <i onmouseover="ShowDate('${item.dob.date}')" class="fas fa-calendar-alt"></i>
   <i onmouseover="ShowCity('${item.location.city},${item.location.country}  ')" class="fas fa-city"></i>
   <i onmouseover="ShowPass('${item.login.password}')" class="fas fa-unlock-alt"></i>

   </div>`;
    })

}
const ShowUser = (data) => {
    console.log(data);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Name is';
    h3.innerHTML = `${data}`;

}
const ShowEmail = (data) => {
    console.log(data);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Email Address is';
    h3.innerHTML = `${data}`;

}
const ShowPhone = (data) => {
    console.log(data);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Phone Number is';
    h3.innerHTML = `${data}`;

}
const ShowDate = (data) => {
    const value = data.slice(0, 10);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Birth Date';
    h3.innerHTML = `${value}`;

}
const ShowPass = (data) => {
    console.log(data);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Login Password';
    h3.innerHTML = `${data}`;

}
const ShowCity = (data) => {
    console.log(data);
    const name = document.getElementById('span');
    const h3 = document.getElementById('h3');
    name.innerText = 'Current City';
    h3.innerHTML = `${data}`;

}
