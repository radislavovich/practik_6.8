var link = document.getElementById('myLink');

link.addEventListener('click', function (e) {
    e.preventDefault();
    var newText = prompt('Введите новый текст');
    if(newText) {
        link.textContent = newText;
    }
})

