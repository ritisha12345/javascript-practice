const name = "ritu"
const repoCount = 50
//console.log(name + repoCount); *outdated syntax or way 
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);// more preferred way
const GameName = new String('ritu-i am-girl')//another way to declare a string
// console.log(GameName[0]);//accessing the keyvalue pair
// console.log(GameName.length);



console.log(GameName.charAt(2));//kis position par konsa character hai 
console.log(GameName.indexOf("t"));//character konse index par hai


const newString = GameName.substring(0, 4)
console.log(newString);

// const anotherString = GameName

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes("ritu"));
console.log(GameName.split('-'));









