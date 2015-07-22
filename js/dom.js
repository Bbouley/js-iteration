/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var sumAll = document.getElementById('sum-all');

var answerBox = document.getElementById('answer');

var sumSelected = document.getElementById('sum-selected');

var countSelected = document.getElementById('count-selected');

var averageAll = document.getElementById('average-all');

var averageSelected = document.getElementById('average-selected');

var value = document.getElementsByClassName("all-prices");

sumAll.onclick = function(){
  var valueString = value[0][0].value;
  var i = 1;
  while(i<value[0].length){
      valueString += ',' + value[0][i].value;
      i++;
    }
   var valueArray = convertNumStringToArray(valueString);
   var total = sumTotal(valueArray);
   answerBox.innerHTML = total;
};


sumSelected.onclick = function(){
  var selectString = '';
  i = 0;
  while(i<value[0].length){
    if(value[0][i].selected === true){
      selectString += value[0][i].value + ',';
    } i++;
  }  var tempString = selectString + '0';
     var selectedArray = convertNumStringToArray(tempString);
     var selectedTotal = sumTotal(selectedArray);
     answerBox.innerHTML = selectedTotal;
};


countSelected.onclick = function(){
  var selectString = '';
  i = 0;
  while(i<value[0].length){
    if(value[0][i].selected === true){
      selectString += value[0][i].value + ',';
    } i++;
  }  var tempString = selectString + '0';
     var selectedArray = convertNumStringToArray(tempString);
     var selectedCount = count(selectedArray);
     answerBox.innerHTML = selectedCount -1;
};


averageAll.onclick = function(){
  var valueString = value[0][0].value;
  var i = 1;
  while(i<value[0].length){
      valueString += ',' + value[0][i].value;
      i++;
    }
   var valueArray = convertNumStringToArray(valueString);
   var average = totalAvg(valueArray);
   answerBox.innerHTML = average;
};


averageSelected.onclick = function(){
 var selectString = '';
  i = 0;
  while(i<value[0].length){
    if(value[0][i].selected === true){
      selectString += value[0][i].value + ',';
    } i++;
  }  var tempString = selectString + '0';
     var selectedArray = convertNumStringToArray(tempString);
     selectedArray.splice(-1);
     var selectedAverage = totalAvg(selectedArray);
     answerBox.innerHTML = selectedAverage;
};






