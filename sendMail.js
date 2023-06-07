
// Function to send input contents as an email to my portfolio email
function sendMail(){

    //IDs from EmailJS for connection and email template
    const serviceID = "service_cdjh67i";
    const templateID = "template_y0lu84t";

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: '#ABA896',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })


    //take the values from inputs as parameters 
    var parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    //select the input fields
    const nameElement = document.querySelector('#name');
    const emailElement = document.querySelector('#email');
    const subjectElement = document.querySelector('#subject');
    const messageElement = document.querySelector('#message');

    // create a variable for the form
    const form = document.querySelector('#send-email');

    //function returns true if the input argument is empty
    const isRequired = value => value === '' ? false : true;

    //function returns false if the length argument is not between the min and max argument
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    //To check the email is valid
    const isEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    // Function to valiate name input field
    const checkName = () => {

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
    const checkEmail = () => {

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
    const checkSubject = () => {

        // set valid boolean to false
        let valid = false;

        // Set min and max values
        const min = 2;
        const max = 100;

        // set variable subject to subjectElement value
        const subject = subjectElement.value.trim();
        console.log(subject);

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
    const checkMessage = () => {

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
    const showError = (input, message) => {

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
    const showSuccess = (input) => {

        // get the inputControl element
        const inputControl = input.parentElement;

        // remove the error class
        inputControl.classList.remove('error');
        inputControl.classList.add('success');

        // hide the error message
        const error = inputControl.querySelector('small');
        error.textContent = '';
    }

    // form.addEventListener('input', function (e) {
    //     switch (e.target.id) {
    //         case 'name':
    //             checkName();
    //             break;
    //         case 'email':
    //             checkEmail();
    //             break;
    //         case 'subject':
    //             checkSubject();
    //             break;
    //         case 'message':
    //             checkMessage();
    //             break;
    //     }
    // });

    // assign variables to functions
    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject(),
        isMessageValid = checkMessage();
    
    //variable isFormValid is if the other variables for functions returns true
    let isFormValid = isNameValid &&
        isEmailValid &&
        isSubjectValid &&
        isMessageValid;

    // if form is valid then send email via emailJS
    if (isFormValid) {
        //send parameters to emailJS connection using email template
        emailjs
            .send(serviceID, templateID, parameters)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                
                //Fire a toast top right to show to user that email has been sent
                Toast.fire({
                    icon: 'success',
                    title: 'Email sent successfully!'
                })
            })
            .catch((err) => console.log(err));
    }
}