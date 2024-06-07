const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const btnkeluar = document.getElementById('btnkeluar');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

btnkeluar.addEventListener('click', () => {
    container.classList.remove("active");
});