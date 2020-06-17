
function insertAfter(newElement, oldElement){
	return oldElement.parentNode.insertBefore(newElement, oldElement.nextSibling);
}

 var lineNumber = 0;
 var commandList = ['hi', 'bye'];
 function execute(input) {
 	"use strict";
    if(event.key === 'Enter') {
    	var command = input.value.split(' ')[0];
        var inputLine = document.createElement("input");
        inputLine.setAttribute("type", "text");
        inputLine.setAttribute("id", "text" + (lineNumber + 1));
        inputLine.setAttribute("onkeydown", "execute(this)");
        if ( command == '' ) {
        	insertAfter(inputLine, input);
        }
        else {
        	var output = document.createElement("div");
        	if (commandList.includes(command)){
        		output.innerHTML = "executing " + command + "...";
        	}
        	else {
        		output.innerHTML = "command not found: " + command;
        	}
        	insertAfter(output, input);
        	insertAfter(inputLine, output);
        }
        lineNumber += 1;
        inputLine.focus();
    }
}

