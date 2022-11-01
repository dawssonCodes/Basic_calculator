"use strict";

var input = document.getElementById('input'),                                                    // Assigning variables for the calculator
number = document.querySelectorAll('.numbers div'), 
operator = document.querySelectorAll('.operators div'), 
result = document.getElementById('result'), 
clear = document.getElementById('clear'), 
output = false;                                                                         // flag to keep an eye on what output is displayed

for (var i = 0; i < number.length; i++) {                                               //Click handlers fornumbers
        number[i].addEventListener("click", function(e){


        var newStringSet = input.innerHTML;
        var lastString = newStringSet[newStringSet.length - 1];

        if (output === false) {
        input.innerHTML += e.target.innerHTML;
        } else if (output === true && lastString === "+" || lastString === "-" || lastString === "×" || lastString === "÷") {


        output = false;
        input.innerHTML += e.target.innerHTML;
        } else {

        output = false;
        input.innerHTML ="";
        input.innerHTML += e.target.innerHTML;
        }
    });
}

for (var i = 0; i < operator.length; i++) {                                            //click handlers for operators
    operator[i].addEventListener("click", function(e){

        var newStringSet = input.innerHTML;
        var lastString = newStringSet[newStringSet.length - 1];

        if (lastString === "+" || lastString === "-" || lastString === "×" || lastString === "÷") {

            var newString = newStringSet.substring(0, newStringSet.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (newStringSet.length == 0) {

            console.log("enter a number first");
        } else {

            input.innerHTML += e.target.innerHTML;
        }
    });

}


result.addEventListener("click", function() {                                                            // click of equal button

    
    var inputString = input.innerHTML;                                                                 //assigns a variable to the values in the input
  
    
    var numbers = inputString.split(/\+|\-|\×|\÷/g);                                       //this converts the values to an array of numbers by removing the operators
  

    var operators = inputString.replace(/[0-9]|\./g, "").split("");                    //this forms an array of operators by removing the numbers and operators entered in the input field
  

  
                                                       //loops for the various operators of the calculator

    var add = operators.indexOf("+");
        while (add != -1) {
          numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));    //I make use of parseFloat function to prevent string concatenation
          operators.splice(add, 1);
           add = operators.indexOf("+");
        }


    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  

    var divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  
    input.innerHTML = numbers[0]; 
  
    output = true; 
  });
  
  clear.addEventListener("click", function() {                        //function for the clear button to clear output when pressed
    input.innerHTML = "";
  })


