console.log("good morning")
// var result = 40 >=60 ? "the student has passed the exam" : " the student has not passed the exam"
//  console.log(result)
 var income = 7000000
 if(income<=500000){
     console.log("you don't have to pay tax")
 }
 else if(income>=500001 && income<=1000000){
    console.log("you have to pay 20% tax on your income")
    var i = income*(20/100)
        console.log(i, "you have to pay this much tax")
 }
 else {
      console.log("you have to pay 30% tax on your income")
     var a = income*(30/100)
      console.log(a,"you have to pay this much amount")
 }
// var b = 20
// var c = b*(30/100)
// console.log(c, "is this ans")