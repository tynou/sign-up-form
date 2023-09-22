const form = document.querySelector("#form")
const firstName = document.querySelector("#f-name")
const lastName = document.querySelector("#l-name")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#phone-num")
const password = document.querySelector("#pass")
const passwordConfirm = document.querySelector("#pass-confirm")

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = '';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
};

const validateInputs = () => {
    const fNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();
    const passConfirmValue = passwordConfirm.value.trim();

    if (fNameValue === '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passValue === '') {
        setError(password, 'Password is required');
    } else if (passValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (passConfirmValue === '') {
        setError(passwordConfirm, 'Please confirm your password');
    } else if (passConfirmValue !== passValue) {
        setError(passwordConfirm, "Passwords don't match");
    } else {
        setSuccess(passwordConfirm);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});