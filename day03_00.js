// // function age(b){
// //     try{
// //         if(b>=18){
// //             throw new Error("eligible for voting");
// //         }
// //         console.log("not eligible for voting");
// //     } catch (error){
// //        console.log(error.message);
        
// //     }
// //     finally{
// //         console.log("write this text anyway")
// //     }
// // }
// // console.log(age(19));
// // // console.log(age(15));
// // async (params) => {
    
// // }
// const sum = (a,b)=> a+b;
// console.log(sum(6,7));
// function add(c,d){
//     return c+d;
// }
// const result=add(7,4);
// console.log(result)
const arr1 = [1,2,3];
const arr2 = [4, 5, 6];
const combineArr = [...arr1, ...arr2];
console.log(combineArr);

const obj1 ={name: 'Alice'};
const obj2 = {age: '21'};
const mergeObj = [...obj1, ...obj2];
console.log(mergeObj);