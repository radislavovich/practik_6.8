const inputField = document.getElementById('inputField');
const duplicateField = document.getElementById('duplicateField');
const submitButton = document.getElementById('submitButton');

inputField.addEventListener('input', function() {
    duplicateField.textContent = inputField.value;
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const inputValue = inputField.value;
    console.log(inputValue);
    inputField.value = '';
    });
