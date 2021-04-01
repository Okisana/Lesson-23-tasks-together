// 1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Sample HTML file :

function js_style() {
    const styleButton = document.getElementById('jsstyle');
    const text = document.getElementById('text');
    if (text.style.color === 'red'){
        text.style.color = 'black';
    } else {
        text.style.color = 'red';
    }
}