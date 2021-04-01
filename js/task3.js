// Write a JavaScript program to set the background color of a paragraph.

function changeBackgroundColor(){
    const text = document.getElementById('text');
    
    if(text.style.backgroundColor === 'red'){
        text.style.backgroundColor = 'white';
    } else {
        text.style.backgroundColor = 'red';
    }

}