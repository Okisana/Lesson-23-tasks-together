// 4. Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

function getAttributes() {
    const link = document.getElementById('w3r');
    
    for (let i = 0; i < link.attributes.length; i++) {
        let attrib = link.attributes[i]; 
        console.log(attrib.name + " = " + attrib.value);
        
    } 

}


