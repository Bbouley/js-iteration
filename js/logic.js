/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of
      the options passed in

NOTE: use a `for` loop to make this happen.

*/

function convertStringToArray(string){
	var array = string.split(',');
	var i = 0;
	var newArray = [];
	  while(i<array.length){
        var temp = parseInt(array[i]);
        newArray.push(temp);
        i++;
	} return newArray;
}


function sumTotal(options){
   var total = 0;
   var i = 0;
   while(i<options.length){
   	total += options[i];
     i++;
   } return '$' + total.toFixed(2);
}


function count(array){
   selectedPrices = array.length;
   return selectedPrices;
}

function sumSelected(array){
   var total = 0;
   var i = 0;
   while(i<options.length){
   	total += options[i];
     i++;
   } return '$' + total.toFixed(2);
}

function totalAvg(options){
    var total = 0;
    var i = 0;
    while(i<options.length){
    	total += options[i];
    	i++;
    } var avg = total/options.length;
        return '$' + avg.toFixed(2);
}




