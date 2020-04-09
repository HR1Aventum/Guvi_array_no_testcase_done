const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Rearrange(userInput)});

var num = [1]
function Rearrange(data){
    for(var i =0 ; i<=data[0]; i++){
    
     num[0] = data[1].split(" ");
     }
     
  if(data[0] == num[0].length){
      var b = num[0];
      var temp = [];
      for (j=0; j<=data[0].length ; j++){
          if(j%2===0){
              temp.push(b[0])
              temp.push(b[2])
              temp.push(b[4])
          }
          
      }
      
 console.log(temp.sort().join(" "+temp.splice(1,0,b[1]) + temp.splice(3,0,b[3])));
  }
}
