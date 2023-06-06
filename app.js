const sections = document.querySelectorAll('.section')
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

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
        }
    })

    //Toggle Theme
    const themeButton = document.querySelector('.theme-button');
    themeButton.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

pageTransitions()