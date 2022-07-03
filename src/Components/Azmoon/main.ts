export{}
interface objectConfig  {     //use interface for more than
                              // two or three parameter make it clean  
[index: string]:string;       //key and value must be string
//  x?:number =>  ? means optional
}
function createPerson(object1 : objectConfig){
    return{
        Name:'sam',
        lastName:'pam'
    }
}
let newPerson = createPerson({Name:'ali',lastName:'alizade'})
console.log()



// console.log(name)


// function name(val1,val2?:10){

// }