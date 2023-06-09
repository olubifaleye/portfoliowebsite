//select the input fields
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const subjectElement = document.querySelector('#subject');
const messageElement = document.querySelector('#message');

// create a variable for the form
const form = document.querySelector('#send-email');

//function returns true if the input argument is empty
export const isRequired = value => value === '' ? false : true;

//function returns false if the length argument is not between the min and max argument
export const isBetween = (length, min, max) => length < min || length > max ? false : true;

//To check the email is valid
export const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Function to valiate name input field
export const checkName = () => {

    // set valid boolean to false
    let valid = false;

    // Set min and max values
    const min = 2;
    const max = 100;

    // set variable name to nameElements value
    const name = nameElement.value.trim();

    // Validation for name field to check that it cant be blank 
    // and if its not blank, it must be between min and max integer values
    if (!isRequired(name)) {
        showError(nameElement, 'Name cannot be blank.');
        
    } else if (!isBetween(name.length, min, max)) {
        showError(nameElement, `Name must be between ${min} and ${max} characters.`)
    } else {

        // When true call success function and set valid to true
        showSuccess(nameElement);
        valid = true;
    }
    return valid;
}

// Function to validate email input field
export const checkEmail = () => {

    // set valid boolean to false
    let valid = false;

    // set variable email to emailElement value
    const email = emailElement.value.trim();

    // Validation for email field to check that it cant be blank 
    // and if its not blank, it must pass regex validator
    if (!isRequired(email)) {
        showError(emailElement, 'Email cannot be blank.');
    } else if (!isEmail(email)) {
        showError(emailElement, 'Email is not valid.')
    } else {

        // When true call success function and set valid to true
        showSuccess(emailElement);
        valid = true;
    }
    return valid;
}

// Function to valiate subject input field
export const checkSubject = () => {

    // set valid boolean to false
    let valid = false;

    // Set min and max values
    const min = 2;
    const max = 100;

    // set variable subject to subjectElement value
    const subject = subjectElement.value.trim();

    // Validation for subject field to check that it cant be blank 
    // and if its not blank, it must be between min and max integer values
    if (!isRequired(subject)) {
        showError(subjectElement, 'Subject cannot be blank.');
    } else if (!isBetween(subject.length, min, max)) {
        showError(subjectElement, `Subject must be between ${min} and ${max} characters.`)
    } else {

        // When true call success function and set valid to true
        showSuccess(subjectElement);
        valid = true;

    }
    return valid;
}

// Function to valiate subject input field
export const checkMessage = () => {

    // set valid boolean to false
    let valid = false;

    // Set min and max values
    const min = 2;
    const max = 10000;

    // set variable subject to messageElement value
    const message = messageElement.value.trim();

    // Validation for message field to check that it cant be blank 
    // and if its not blank, it must be between min and max integer values
    if (!isRequired(message)) {
        showError(messageElement, 'Message cannot be blank.');
    } else if (!isBetween(message.length, min, max)) {
        showError(messageElement, `Message must be between ${min} and ${max} characters.`)
    } else {

        // When true call success function and set valid to true
        showSuccess(messageElement);
        valid = true;
    }
    return valid;
}

// Function to show error indicator
export const showError = (input, message) => {

    // get the inputControl element
    const inputControl = input.parentElement;

    // add the error class
    inputControl.classList.remove('success');
    inputControl.classList.add('error');

    // show the error message
    const error = inputControl.querySelector('small');
    error.textContent = message;
};

// Function to show success indicator
export const showSuccess = (input) => {

    // get the inputControl element
    const inputControl = input.parentElement;

    // remove the error class
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

    // hide the error message
    const error = inputControl.querySelector('small');
    error.textContent = '';
}

const debounce = (fn, delay = 300) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'subject':
            checkSubject();
            break;
        case 'message':
            checkMessage();
            break;
    }
}));