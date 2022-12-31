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
            let currenButton = document.querySelectorAll('.active-button');

            //set first button clicked to be empty
            currenButton[0].className = currenButton[0].className.replace('active-button', '');
            
            this.className += 'active-button'
        })
    }
}

pageTransitions()