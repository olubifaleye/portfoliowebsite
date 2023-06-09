import { isRequired } from "./checkInputs.js";
import { isBetween } from "./checkInputs.js";
import { isEmail } from "./checkInputs.js";
import { checkName } from "./checkInputs.js";
import { checkEmail } from "./checkInputs.js";
import { checkSubject } from "./checkInputs.js";
import { checkMessage } from "./checkInputs.js";
import { showError } from "./checkInputs.js";
import { showSuccess } from "./checkInputs.js";

// Function to send input contents as an email to my portfolio email
window.sendMail = function(){

    const allInputControls = document.querySelectorAll(".input-control");

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

                //remove success class from all the input control divs
                allInputControls.forEach((inputControl) =>{
                    inputControl.classList.remove('success')
                })
                
                //Fire a toast top right to show to user that email has been sent
                Toast.fire({
                    icon: 'success',
                    title: 'Email sent successfully!'
                })
            })
            .catch((err) => console.log(err));
    }
}
