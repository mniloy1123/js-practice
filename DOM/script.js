//event is an action the user has taken

let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'fuchsia';
})