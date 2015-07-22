var names = document.getElementsByClassName('all-names');

var arrayNames = convertNamesToArray(names[0].innerHTML);

var answerBox = document.getElementById('answer');

var printNames = document.getElementById('all-names');

var firstNames = document.getElementById('first-names');

var lastNames = document.getElementById('last-names');

var namesWithLength = document.getElementById('names-with-lengths');

printNames.onclick = function(){
  for (var i = 0; i < arrayNames.length; i++) {
    var p = document.createElement('p');
    p.innerHTML = arrayNames[i];
    answerBox.appendChild(p);
  }
};

firstNames.onclick = function(){
  for (var i = 0; i < arrayNames.length; i++) {
    var firstName = arrayNames[i].slice(0, arrayNames[i].indexOf(' '));
    var p = document.createElement('p');
    p.innerHTML = firstName;
    answerBox.appendChild(p);
  }
};

lastNames.onclick = function(){
for (var i = 0; i < arrayNames.length; i++) {
    var firstName = arrayNames[i].slice(arrayNames[i].indexOf(' ')+1);
    var p = document.createElement('p');
    p.innerHTML = firstName;
    answerBox.appendChild(p);
  }
};

namesWithLength.onclick = function(){
   for (var i = 0; i < arrayNames.length; i++) {
    var p = document.createElement('p');
    p.innerHTML = arrayNames[i] + ' - ' +arrayNames[i].length;
    answerBox.appendChild(p);
  }
};
