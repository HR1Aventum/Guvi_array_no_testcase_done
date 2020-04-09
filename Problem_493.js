//problem - 493

const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Mark_check(userInput)});

var num = []
function Mark_check(data){
    num = data[0].split(" ");
    console.log(num)
    var num1 = []
    
        
        for (i=0;i<=num[0];i++){
            num1 = data[1].split(" ");
    
    }
    if (num[1]===num1[0] || num[1] === num)
    
    console.log(num1)
}
