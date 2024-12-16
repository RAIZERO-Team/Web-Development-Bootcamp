document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

  
    function validateName() {
        const icon = name.nextElementSibling;
        if (name.value.trim().length >= 3) {
        name.classList.add('valid');
          name.classList.remove('invalid');
            icon.textContent = '✔';
        } else {
            name.classList.add('invalid');
            name.classList.remove('valid');
            icon.textContent = '✖';
        }
    }

    function validateEmail() {
        const icon = email.nextElementSibling;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email.value.trim())) {
            email.classList.add('valid');
            email.classList.remove('invalid');
            icon.textContent = '✔';
        } else {
            email.classList.add('invalid');
            email.classList.remove('valid');
            icon.textContent = '✖';
        }
    }

    function validatePhone() {
        const icon = phone.nextElementSibling;
        const regex = /^\d{10}$/;
        if (regex.test(phone.value.trim())) {
            phone.classList.add('valid');
            phone.classList.remove('invalid');
            icon.textContent = '✔';
        } else {
            phone.classList.add('invalid');
            phone.classList.remove('valid');
            icon.textContent = '✖';
        }
    }

    function validatePassword() {
        const icon = password.nextElementSibling;
        if (password.value.trim().length >= 6) {
            password.classList.add('valid');
            password.classList.remove('invalid');
            icon.textContent = '✔';
        } else {
            password.classList.add('invalid');
            password.classList.remove('valid');
            icon.textContent = '✖';
        }
    }

    function validateMessage() {
        const icon = message.nextElementSibling;
        if (message.value.trim() !== '') {
            message.classList.add('valid');
            message.classList.remove('invalid');
            icon.textContent = '✔';
        } else {
            message.classList.add('invalid');
            message.classList.remove('valid');
            icon.textContent = '✖';
        }
    }

    
    name.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    phone.addEventListener('input', validatePhone);
    password.addEventListener('input', validatePassword);
    message.addEventListener('input', validateMessage);

    
    
});
