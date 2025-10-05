let home_txt = document.getElementById('Home_txt')
let note_page = document.getElementById('Note_page')
let new_note_btn = document.getElementById("New_note")
let note_page_add_note = document.getElementById('note_page_add_note')
let note_page_note_display = document.getElementById('note_page_note_display')



function Choosen_btn(buttonId){
    document.querySelectorAll(".Menu_options").forEach( button => {
        button.classList.remove("choosen"); 
    }); 
    document.getElementById(buttonId).classList.add("choosen")
}


function Home(){
    note_page.style.display ='none'
    note_page_note_display.style.display = 'none'
    note_page_add_note.style.display = 'none'

    home_txt.style.display ='block'
    Choosen_btn("home_btn");

}

let note_display = document.getElementById('Note_display')


function Note(){
    home_txt.style.display = 'none'
    note_page.style.display = 'flex'
    note_page_note_display.style.display ='flex'
    Choosen_btn("note_btn"); 

}

function New_note(){
    note_page_note_display.style.display = 'none'
    note_page_add_note.style.display = 'flex'
}

let rootStyles = getComputedStyle(document.documentElement);
let title_note_resume_txt_ft_size = rootStyles.getPropertyValue('--title_note_resume_txt_ft_size');
let txt_note_resume_txt_ft_size = rootStyles.getPropertyValue('--txt_note_resume_txt_ft_size');


function Back(){
    document.getElementById('Title_note').value = "";
    document.getElementById('Txt_note').value = "";
    note_page_add_note.style.display = 'none'
    note_page_note_display.style.display ='flex'
}


function Add_note(){
    let title_note_value = document.getElementById('Title_note').value
    let txt_note_value = document.getElementById('Txt_note').value

    
    if (title_note_value, txt_note_value != "" ){

        let note_resume = document.createElement('Button');
        note_resume.classList.add('note_resume'); 
        note_resume.innerHTML = `
        <p style='color:white; padding:5px; font-size: ${title_note_resume_txt_ft_size}'><b>${title_note_value}</b></p>
        <p style='color:white; padding:5px; font-size: ${txt_note_resume_txt_ft_size}'>${txt_note_value}</p>
         `
        note_resume.addEventListener('click', function(){
            Full_note(title_note_value, txt_note_value)
        }); 
        note_display.appendChild(note_resume) 
        note_page_note_display.style.display = 'flex'
        note_page_add_note.style.display = 'none'


    }
    else {
        alert("You need to enter a title AND some text")
    }

    document.getElementById('Title_note').value = "";
    document.getElementById('Txt_note').value = "";
}


function Full_note(title,text){
    note_page_note_display.style.display = 'none'
    note_page_add_note.style.display = 'flex'

    document.getElementById('Title_note').value = title
    document.getElementById('Txt_note').value = text
    
}



function Timer(){
}

function Calendar(){
}