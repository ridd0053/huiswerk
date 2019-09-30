//oprdacht 1:
/*Variabel van
opdracht 1 en 2*/
    let cijfer = 8;
/*if else verklaring opdracht 1 */
        if(cijfer < 6){
        console.log('onvoldoende');
        }else if(cijfer >= 6 && cijfer <= 7){
        console.log('voldoende');
        }else if(cijfer > 7 && cijfer < 9){
        console.log('goed');
        }else if(cijfer >= 9){
        console.log('uitmuntend');
        }else{
        console.log('Heb je de toets gemaakt?');
        };
//opdracht 2:
/*switch opdracht 2*/ 
switch(true){
    case cijfer < 6:
    console.log('onvoldoende')
    break;
    case cijfer >= 6 && cijfer <= 7:
    console.log('voldoende');
    break;
    case cijfer > 7 && cijfer < 9:
    console.log('goed');
    break;
    case cijfer >= 9:
    console.log('uitmuntend');
    break;
    default:
    console.log('Heb je de toets gemaakt?');
}
//opdracht 3:
/*variabelen van 
opdracht 3*/ 
const purchasedBook = true;
const job = 'teache';
let inTrain = true;
/*if else 
voor opdracht 3*/ 
if(purchasedBook == true && inTrain == true && job == 'teacher'){
    console.log('finally i can enjoy my book!');
}else if(purchasedBook == true || inTrain == true || job == 'teacher'){
    if(purchasedBook == false){
    console.log('You cannot read if you do not buy a book!');
    }else if(inTrain == false){
    console.log('You cannot read while you drive!');
    }else if (job != 'teacher'){
        console.log('You can also read when you are '+ job +'.');
    }else{
        console.log('Oops! Something went wrong!');
        }
}else{
    console.log('None of the statements are right?');
    }
