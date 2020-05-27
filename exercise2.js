//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
function forWhile(){
    let i = 0;
    while(i < 10){
      console.log(" the value of i in the loop is : " + i);
      i++;
    }
    return 0;
    }



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
var ans = 0;
var i;
const add = function(ans){
  ans = 30 + 2
  return ans;
}
var w = add(ans);

const sub = function (ans, w){
  ans = w * 20;
  return ans;
}
var x = sub(ans, w);
const div = function(ans, x){
  ans = x / 10;
  return ans;
}
var y = div(ans, x);
const pow = function(ans, y){
  ans = y * y;
  return ans;
}
var z = pow(ans, y);
var operations = [w,x,y,z];
function operate(operations){
  for (let i = 0; i < 4; i++){
    console.log(operations[i]);
  }return "It Works!";
}


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""




/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

switch(day) {
  case "monday":
    console.log("we got a long week ahead of us...");
    break;
  case "tuesday":
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
    break;
  case "wednesday":
    console.log("We are smack dab in the middle of the week")
    break;
  case "thursday":
    console.log("Thursday night... the mood is right");
    break;
  case "friday":
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;
  default :
    console.log("It's a weekend!");
}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
var drinkingAge = age > 21 ? console.log("adult"):console.log("minor");

var teenager = (age > 13 && age < 19) ? console.log('teen'): console.log("not a teenager");

var retirement = age > 65 ? console.log("retired"):console.log("still working...");
function ageGroups(age, drinkingAge, teenager, retirement){
    console.log(drinkingAge);
    console.log(teenager);
    console.log(retirement);
  }


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
var me = {
    name: "Kevin Ibanez",
    age: 18,
    gender: "male",
    hobbies: "building computers",
    profession: "student",
    education: "one semester of university",
    learn: function(){
      return this.name;
      },
    introduction: function(){
      return "Hello, my name is " + this.name + "!" + " Nice to meet you!"; 
    }
  
  }

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
var pc = {
    cpu: "Ryzen 7 1700",
    gpu: "RTX 2060 Super",
    ramSize: "32GB",
    rbg: "Yes",
    caseType: "Full-Atx glass",
    coolingType: "air cooled",
    performance: function(){
      return "With the " + this.cpu + " and " + this.gpu + " plus " + this.ramSize + ", it can run every single game well!"
    }
  }


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...




/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


