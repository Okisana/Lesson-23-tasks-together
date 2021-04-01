// 5. Write a JavaScript function to add rows to a table.
// Sample HTML file :
function insert_Row() {
        const table = document.getElementById('sampleTable');
        let rowNumber = table.children.length+1;
   
        const newElement = `
        <tr><td>Row${rowNumber} cell1</td>
        <td>Row${rowNumber} cell2</td></tr>`
        ;
        table.innerHTML += newElement;
}