//opdracht 1:
  //fibonacci:
  function fibonacci(a){
    let b = 1;
    while(a < 10){
        a++
        console.log(b += a); 
    }
  }
  fibonacci(0);

//opdracht 2:
  //functie aftellen:
function countdown(count, jaartal){
      const newYear = setInterval( function() {
      console.log(count);
      count--
      
      if (count === 0) {
      console.log(`Happy ${jaartal}`);
        clearInterval(newYear);
      }
       
    } ,1000)
  }
countdown(10, 2020);


//opdracht 3:    
    //declaratie
    console.log(hoisting());
    function hoisting(){
        return 'declaratie functie';
    }
    
    //expressie
    console.log(hoist());
    const hoist = function(){
        return 'expressie functie';
    }
    
    /* hoist(); zou je hier moeten zetten om de expressie functie te laten werken,
    bij declaratie functie mag je de functie al wel van te voren oproepen! */
    