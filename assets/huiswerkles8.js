//Assignment 1: JSON
/* Property of lapRounds is lap and the value is an array. 
    Then i have the properties round and time.*/
const  lapRounds = {
    lap: [
        {
        round: "round 1", 
        time: 55.99
        }, 
        {
        round: "round 2", 
        time: 63.00
        },
        {
        round: "round 3", 
        time: 63.01
        },
        {
        round: "round 4", 
        time: 54.01
        }, 
        {
        round: "round 5", 
        time: 62.79
        }, 
        {
        round: "round 6", 
        time: 52.88
        },
        {
        round: "round 7", 
        time: 53.10
        }, 
        {
        round: "round 8", 
        time: 54.12
        }
    ]     
}
console.log(lapRounds)

//Assignment 2: Teachers array
const teachers = [
    {
        name: "Loek",
        profession:  "Teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple"
    }
]
teachers.forEach(function(value){
    console.log( `I have a ${value.profession} named ${value.name} and he likes to work on a ${value.brand} computer.`)
})
//Assignment 3: salary per hour
 for (let i = 0; i < teachers.length; i++) {
     teachers[0].salary = 1000;
     teachers[1].salary = 1050;
     teachers[2].salary = 1025;
     teachers[i].hoursPerWeek = 40;

     teachers[i].salaryPerHour = function(salary, hoursPerWeek){
        return salary/hoursPerWeek;
        
     }
     console.log(`Salary/hour: €${teachers[i].salaryPerHour(teachers[i].salary, teachers[i].hoursPerWeek).toFixed(2)},-`);
     
 }
 
 

console.log(teachers);

