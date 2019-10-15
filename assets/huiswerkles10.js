 
 const buttonAddOne = document.querySelector(".buttonAddOne")   //button, selected by class
 buttonAddOne.addEventListener('click', addOne);            // add the event with the function addOne
 function addOne(){                                         //use the event with the function addOne
    const count = document.querySelector("#number");
    
    count.innerText++;                                  // add count
    
    if(count.innerText == 10){
        buttonAddOne.classList.replace('buttonAddOne', 'buttonByTen') //replace the class buttonAddOne with buttonByTen
        console.log('hi')
    }
    if(count.innerText == 20){
        buttonAddOne.classList.add('buttonByTwenty')    //add the class buttonByTwenty
    }
 }

 let item = document.querySelector('#item');        // selecting item inputfieled
 let price = document.querySelector('#price');      // selecting price inputfieled
 const submit = document.querySelector('#submit')   // selecting submit button
 let two = document.querySelector('#two')           // selecting the dive two

let priceArray = [];    // array for the added prices
let removedPrice = [];  // array for the removed prices


 let table = document.createElement('table')    //creating table
 let trHeading = document.createElement('tr')   //creating the heading row
 let trTotal = document.createElement('tr')     //creating the total row
 let thProduct = document.createElement('th')   //creating the product heading
 let thPrice = document.createElement('th')     // creating the price heading
 let thTotal = document.createElement('th')     //creating the total heading


 const msg = document.createElement('p')        //creating the message


 submit.addEventListener('click', submission);  //add event for checking the value and add products and prices

 thProduct.innerText = 'Product';               //giving the name for the heading product
 thPrice.innerText = 'Prijs';                   //giving the name for the heading price
 

 two.append(table)                             //append table
 table.append(trTotal)                          //append total row
 table.append(trHeading)                        //append heading row
 trTotal.append(thTotal)                        //append cel total
 trHeading.append(thProduct)                    //append product heading
 trHeading.append(thPrice)                      //append price heading
 
 

function submission(){                          //use the event for checking value and add products and prices
    if(price.value === '' && item.value === ''){
        msg.innerText = 'Vul een Item en Prijs in'          //the if is for when there is no price value and product value
        msg.classList.add('color')
        two.append(msg); 
    }
    else if(price.value === ''){
        msg.innerText = 'Vul een bedrag in bij Prijs'      // if there is no price value
        msg.classList.add('color')
        two.append(msg);
     } 
     else if(item.value === ''){
        msg.innerText = 'Vul een product in bij Item in'        // if there is no product value
        msg.classList.add('color')
        two.append(msg);
     } else{
        msg.remove();
        two.append()
        appendFunction()                    //add the products and prices
        
        
     }

}
    

function appendFunction(){          //the function for adding products and prices
    let total = 0;

    let trList = document.createElement('tr')       //creating the list row
    let tdProduct = document.createElement('td')    //creating the product cell
    let tdPrice = document.createElement('td')      //creating the price cell
    let tdRemove = document.createElement('td')     //creating the remove cell
    
    tdProduct.innerText = item.value    //change the inner text of the product cell
    tdPrice.innerText = price.value     //change the inner text of the price cell
    tdRemove.innerText = 'Verwijder'    //change the inner text of the remove cell

    table.append(trList)                //add a list row
    trList.append(tdProduct)            //add the product cel
    trList.append(tdPrice)              //add the price cel
    trList.append(tdRemove)             //add the 'verwijder' cell

    //console.log(Number(tdPrice.textContent))
    
    priceArray.push(Number(price.value))

    priceArray.forEach(element => {
        //console.log(total += element)
        //console.log(priceArray)
        total += element
        thTotal.innerText = `Totaal: €${total}` 
        
    });
    
     
    tdRemove.addEventListener('click', remove)      //add an event on the remove cell
    
    
    function remove(){
        trList.remove(this.tdProduct)   //remove product td
        trList.remove(this.tdPrice)     // remove price td
        trList.remove(this.tdRemove)    // remove remove td
     
        removedPrice.push(Number(tdPrice.textContent))  //push the removed prices in the array removedPrice
                
        console.log(removedPrice);
        let z  = 0;
        removedPrice.forEach(element => {   
                z += element   
                  
            
         });
         console.log(z);    //in the console is the total of the removed prices
    } 
}