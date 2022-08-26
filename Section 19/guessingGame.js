let max = parseInt(prompt("Enter The Maximum Number"));

while (!max){
    max = parseInt(prompt("Enter The Maximum Number"));
}

let targetNum = Math.floor(Math.random() * max + 1);

console.log(targetNum)

let guess = parseInt(prompt("Enter Your Guess"));
let count = 1;

while ( guess !== targetNum){
    count++;
    if(guess > targetNum){
        guess = parseInt(prompt("Too High! Guess Again"));
    }
    else{
        guess = parseInt(prompt("Too Low! Guess Again"));
    }
}

prompt(`Congratz! you got the number in ${count} attempt!`)