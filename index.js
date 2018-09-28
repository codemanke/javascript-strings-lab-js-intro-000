var greeting = "Hello, everybody!";

var specialGuest = "Neil deGrasse Tyson";

var greetSpecialGuest = "" + specialGuest + "!";

var topic = "space";

var conversation = `${topic}`;


function sayHelloToRaj(){
  console.log("hello , rj")
}
function sayHelloToGagan(){
  console.log("hello gagan")
}
function sayHelloToNavi(){
  console.log("hello ")
}

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}
 
sayHelloTo('Isabel') // "Hello, Isabel!"
sayHelloTo("Jane") // "Hello, Jane!"
sayHelloTo("R2-D2") // "Hello, R2-D2!"
sayHelloTo(1)