const sections = document.querySelectorAll('.section')
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')
const allInputControls = document.querySelectorAll(".input-control");

const smallName = document.querySelector('#smallName');
const smallEmail = document.querySelector('#smallEmail');
const smallSubject = document.querySelector('#smallSubject');
const smallMessage = document.querySelector('#smallMessage');

//page transitions
function pageTransitions(){
    //Button Click active class
    //for loop to loop the length of a section button 
    for(let i = 0; i < sectionButton.length; i++){

        //each indexed button will add a click event listener
        sectionButton[i].addEventListener('click', function(){
            //set button clicked to be current button
            let currentButton = document.querySelectorAll('.active-button');

            //set first button clicked to be empty
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            
            this.className += ' active-button'
        })
    }

    //Sections Active class
    allSections.addEventListener('click', (e) =>{
        //content inside the target of the cursor click
        const id = e.target.dataset.id; 

        if(id){
            //remove seelcted from the other buttons
            sectionButtons.forEach((button) =>{
                button.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide other sections 
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            
            //collect and store an element from index.html by id 
            const element = document.getElementById(id);

            element.classList.add('active')
            
            // If ID of section isnt contact
            if(id !== "contact"){

                //reset the form
                document.getElementById("send-email").reset();

                //remove erorr class from all the input control divs
                allInputControls.forEach((inputControl) =>{
                    inputControl.classList.remove('error')
                })

                // Reset the text content of the small tag
                smallName.textContent = '';
                smallEmail.textContent = '';
                smallSubject.textContent = '';
                smallMessage.textContent = '';
            }
        }
    })

    //Sections Active class
    allSections.addEventListener('keypress', (e) =>{
        //content inside the target of the cursor click
        const id = e.target.dataset.id; 

        if(e.key === 'Enter'){

            if(id){
                //remove seelcted from the other buttons
                sectionButtons.forEach((button) =>{
                    button.classList.remove('active')
                })
                e.target.classList.add('active')

                //Hide other sections 
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                
                //collect and store an element from index.html by id 
                const element = document.getElementById(id);

                element.classList.add('active')

                // If ID of section isnt contact
                if(id !== "contact"){

                    //reset the form
                    document.getElementById("send-email").reset();

                    //remove erorr class from all the input control divs
                    allInputControls.forEach((inputControl) =>{
                        inputControl.classList.remove('error')
                    })

                    // Reset the text content of the small tag
                    smallName.textContent = '';
                    smallEmail.textContent = '';
                    smallSubject.textContent = '';
                    smallMessage.textContent = '';
                }
            }
        }
    })

    //Toggle Theme
    const themeButton = document.querySelector('.theme-button');
    themeButton.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    themeButton.addEventListener('keypress', (e) =>{

        if(e.key === 'Enter'){
            let element = document.body;
            element.classList.toggle('light-mode');
        }
    })
}

pageTransitions()