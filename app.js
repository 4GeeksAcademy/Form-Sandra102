
document.getElementById('cancelButton').addEventListener('click', function () {
    let form = document.getElementById('paymentForm');
    form.reset();

    form.querySelectorAll('input').forEach(input => input.value = '');

    document.getElementById('validation-message').style.display = 'none';
});

document.getElementById('sendButton').addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.getElementById('paymentForm');
    var validationMessage = document.getElementById('validation-message');

    if (!form.checkValidity()) {
        form.reportValidity(); 
        validationMessage.style.display = 'block';
    } else {
        alert('Form is valid!');
    }
});