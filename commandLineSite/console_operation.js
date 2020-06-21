var lineNumber = 0;

// execute takes the element "input" as input
function execute(input) {
	"use strict";
	if(event.key === 'Enter') {
		// command entered is first word in "input" line
    	var command = input.value.split(' ')[0];
        
        // make new input line, id labeled like "text1"
        var inputLine = document.createElement("input");
        inputLine.setAttribute("type", "text");
        inputLine.setAttribute("id", "text" + (lineNumber + 1));
        inputLine.setAttribute("onkeydown", "execute(this)");
        
        // make new prompt signature with id like "prompt1"
        var prompt = document.createElement("span");
        prompt.setAttribute("id", "prompt" + (lineNumber + 1));
        prompt.innerHTML = ">>> ";
        
        // the last prompt, so it can be deleted
        var oldPrompt = document.getElementById("prompt" + lineNumber.toString());
        
        // convert old input line content to text div
        var oldLine = document.createElement("div");
        oldLine.innerHTML = ">>> " + input.value;
        
        // place oldLine after input, then delete old input and old prompt
        // "input" now refers to oldLine
        insertAfter(oldLine, input);
        input.parentNode.removeChild(input);
        oldPrompt.parentNode.removeChild(oldPrompt);
        input = oldLine;
        	
        if ( command == '' ) {
        	// place inputLine after prompt after input
        	insertList([input, prompt, inputLine]);
        }
        else {
        	// div for output text
        	var output = document.createElement("div");
        	// commands in the command list are functions in 
        	// file "console_commands.js". If the command was in the list,
        	// call the appropriate function. 
        	if (commandList.includes(command)){
        		window[command](output);
        	}
        	else {
        		output.innerHTML = "command not found: " + command;
        	}
        	// place inputLine after prompt after output after input
        	insertList([input, output, prompt, inputLine]);
        }
        lineNumber += 1;
        inputLine.focus();
    }
}

function insertAfter(newElement, oldElement){
	return oldElement.parentNode.insertBefore(newElement, oldElement.nextSibling);
}

// function to insert list of elements after each other
// the first element in list must be existing html element
function insertList(elements){
	for (i = 0; i < elements.length - 1; i++) {
		insertAfter(elements[i+1], elements[i]);
	}
}


