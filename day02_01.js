//switch case 
var age = 21
var voterId  = "registered for voting"

switch(age || voterId){
    case age>=18 && voterId== "registered for voting":
        console.log("eligible");
        break;
    default:
        console.log("not eligible");
}