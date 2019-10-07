const table = document.querySelector('table')
const row = document.querySelectorAll('tr')
const td = document.querySelectorAll('td')
let x = 0;
for (let i = 1; i < td.length; i+=2) {
    cijfer = td[i].innerText
    total =  x += Number(cijfer);
 }
for (let i = 0; i < row.length; i++) {
       
    courses = i+1
 }

const average = (total/courses).toFixed(1)
function createAverage(){
    //create a new row
    const createRow = document.createElement('tr');
    //create a new td
    const tdText = document.createElement('td');
    const tdAverage = document.createElement('td');
    //create text for td's
    tdText.innerText = 'Gemiddelde:'
    tdAverage.innerText = average

    table.append(createRow); //append a new row in the table
    createRow.append(tdText) //append a new td in the created row
    createRow.append(tdAverage) //append a new td in the created row
}
createAverage()

function changeColor(){
const listItems = document.querySelectorAll('li')
 
for (let i = 1; i < listItems.length; i+=2) {
    evenItems = listItems[i];
    evenItems.style.background = 'red';
}

}
changeColor()

function createImageElement(imageSrcName){

    const body = document.querySelector('body'); //select body
    const creatImage = document.createElement('img'); //create image tag
    creatImage.setAttribute('src', imageSrcName) //add the src
    body.append(creatImage) //append image
    
    
}
createImageElement('./assets/painting.jpg');