
function myFunction(){

 
  
    let input = prompt("What would you like to do?")
    const toDo = ["hello","thishfnoa"]


    while(input !== "quit"){

        input = prompt("What would you like to do?")


        if(input === "list"){

            console.log("************")
            for(let i = 0; i < toDo.length; i++){
                console.log(`${i}: ${toDo[i]}`)
            }
            console.log("************")
            input = prompt("Printing List! What would you like to do next?")


        }else if(input === "new"){

            const newToDo = prompt("Ok, What do you want to add?")
            toDo.push(newToDo)
            console.log(`${newToDo} have been added to the list!`)


        }else if(input === "delete"){

            const index = parseInt(prompt("OK! which index would you like to delete?"))
            if(!Number.isNaN(index)){
                const deleted = toDo.splice(index, 1)
                console.log(`Ok, deleted ${deleted[0]}`)
            }else{
                console.log("Unknown Index")
            }
            
            
        }
    }

    console.log("Ok. Quitting The App")

}
