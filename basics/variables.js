const accountId = 144553
let accountEmail = "ritu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"//not recommended practice but can be delcared in this type also

//accountId = 2//not allowed

accountEmail ="hc@.com"
accountPassword = 21121
accountCity = "Mumbai"
let accountState;

console.log(accountId);


/*
prefer not to use var
beacuse of issue in block scope and functional scope 
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])