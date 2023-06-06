

// Function to send input contents as an email to my portfolio email
function sendMail(){

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

    //IDs from EmailJS for connection and email template
    const serviceID = "service_cdjh67i";
    const templateID = "template_y0lu84t";

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