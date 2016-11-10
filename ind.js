"use strict";
function addHelpTextClosure(help){
  document.getElementById("help").innerHTML = help;
}

function addhelp(help){
  return function(){
     addHelpTextClosure(help);
  };
}

function addHelpText(){
    var items = [{"id":"name", "help" : "Waht is your name"},
    {"id":"age", "help" : "Waht is your age"},
    {"id":"email", "help" : "Waht is your email"}
  ];

  for(var i=0; i<items.length; i++){
    var element = items[i];
   document.getElementById(element.id).onfocus = addhelp(element.help);

  }
}

addHelpText();
