/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of 
      the options passed in

NOTE: use a `for` loop to make this happen.

*/

function sum(options){
   var total = 0;
   var i = 0;
   while(i<options.length){
   	total += options[i];
     i++;
   }; return total;
}
/* this function will work as long as an array is being input, 
  may need to be refactored to take in single digits and then push
  those to an array */

array = [3,4,5,6]
sum(array)