//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...
function fahrenheitToCelsius(fahrenheit){   
var fahrenheit = prompt("Enter temperature in fahrenheit");
var celsius = (fahrenheit -32) * (5/9);
return celsius;
}
console.log("The temperature in Celsius is " + fahrenheitToCelsius());




/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...
var age = parseInt(prompt("Enter your age"));
function eligibleForVoting(age){
    var ans;
    if (age >= 18){
        ans = "Yes!";
    }else{
        ans = "No!";
    }
    return ans;
}



/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...
var str = prompt("Enter a string!");
function stringToArray(str){
    var strSplit = str.split(" ");
    var strJoin = strSplit.join();
    console.log(strSplit);
    console.log(strJoin);
    return str;
  }

/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
var phone = prompt("Enter a phone number") + "";
function reversePhone(phone){
  return phone.split("").reverse().join("");

}
function phoneToString(phone){
  var phone = phone.toString();
  return phone;
}
function reverseArray(phone){
  var splitPhone = phone.split("");
  var reverseArray = splitPhone.reverse();
  return reverseArray;
}




/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...
function createCar(){
    var make = prompt("What is the car's make?");
    var model = prompt("What is the car's model?");
    var year = prompt("What is the car's year?");
    var color = prompt("What is the car's color?");
    var car = [make,model,year,color];
    return car;
    }





/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...
function oddEven(){
    var i;
    for (i = 0; i < 15; i++){
      if (i % 2 == 0 && i>1){
        console.log("even");
      }else{
        console.log("odd");
      }
    }
    return i;
  }



/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function tekCamp(){
    var i;
    for (i = 1; i < 100; i++){
      if (i % 3 == 0 && i%5==0){
        console.log("TEKcamp");
      }else if(i%5==0){
        console.log("camp");
      }else if(i % 3 == 0){
        console.log("TEK")
      }
    }
    return i;
  }

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
function valueArray(){
    var i;
    const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    for (i = 0; i < 5; i++){
      if (i == 0){
        console.log(nums[0]);
      }else if(i==1){
        console.log(nums[3]);
      }else if(i==3){
        console.log(nums[6]);
      }else if(i==4){
        console.log(nums[9]);
      }
    }
    return 0;
  }


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".
function arrayFor(){
    var i;
    const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding'];
    const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
    var school = 'TEKcamp';
    var index = foodArray.indexOf('pudding');
  
  if (index !== -1) {
      foodArray[index] = school;
      console.log(foodArray[index]);
  }
  for (i = 0; i < 6; i++){
    if (i == 0){
      console.log(foodArray[0] + " are " + adjectiveArray[0])
    }else if (i == 1){
      console.log(foodArray[1] + " are " + adjectiveArray[1])
    }else if (i == 2){
      console.log(foodArray[2] + " is " + adjectiveArray[2])
    }else if (i == 3){
      console.log(foodArray[3] + " are " + adjectiveArray[3])
    }else if (i == 4){
      console.log(foodArray[4] + " is " + adjectiveArray[3])
    }else if (i == 5){
      console.log(foodArray[5] + " is " + adjectiveArray[6])
    }
  }
  return 0;
  }

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


