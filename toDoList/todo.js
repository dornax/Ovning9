const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('submit', (e) => {
    e.preventDefault();
    output.innerHTML += `<p>${e.target[0].value}<p>`
    document.getElementById('item').value = "";
});

output.addEventListener('dblclick', (e) => {

    e.target.remove();
});

output.addEventListener('click', (e) => {

    e.target.classList.toggle('disabled');
});