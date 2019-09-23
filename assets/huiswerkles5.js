//opdracht 1:
let x = 0;
while(x < 20){
    x++
    if(x % 4 === 0){
        console.log(`${x} is deelbaar door 4`)
    }else{
        console.log(`${x} is niet deelbaard door 4`)
    }
}
//opdracht 2:
let a = 0;
let b = 1;
while(a < 10){
    a++
    console.log(b += a);
}
//opdracht 3:
const cijfers = [2, 4 ,8 ,9, 12, 13];
let r = 0;
for(let i = 0; i <= cijfers.length-1; i++){
    console.log(r += cijfers[i]);
}