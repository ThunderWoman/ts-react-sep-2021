import {IUser} from "./interface/user.interface";

const user : IUser= {
    name:"Max",
    age:18,
    gender:'male'
}


function showSum(a:number,b:number) : void{
    console.log(a + b);
}
function sum(a:number,b:number) :number {
    return a + b
}


function incAge(someUser:IUser, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 4));