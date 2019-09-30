//Opdracht 1 show random number:
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
function randomRounds(){
    return Number(lapRounds[Math.floor(Math.random()*lapRounds.length)]).toFixed(2);
} 

console.log(randomRounds());

// opdracht 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
 for( let row = 0; row < allMyRecords.length; row++){
     for( let column = 0; column < allMyRecords[row].length; column++){
         console.log(allMyRecords[row][column]);
     }
 }
 
//opdracht 3 
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 };
 console.log(filteredLapRoundsWithForLoop());
 
 const lowerThenFour = lapRounds.filter(function(rounds){
     return Number(rounds < 4);
 });

 console.log(lowerThenFour);
 //het is beter, omdat het korter is en overzichtelijker.
 
