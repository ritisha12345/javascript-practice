// console.log(2 >1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2 ==1);
// console.log(2!=1);

// console.log("2" >1); always compare same datatypes
// console.log("02" >1); predictable outputs asre not gained when we compare two different datatypes 



// **immp**
// console.log(null >0); false output
// console.log(null >=0); false output
// console.log(null==0);  true
// the reason is that an equality check == and comparisons ><>=<= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why null>=0 is true and null>0 is false


// === strict check 
console.log("2" === 2); //checks the datatype also



