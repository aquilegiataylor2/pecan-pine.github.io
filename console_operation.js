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
        
        insertAfter(oldLine, input);
        input.parentNode.removeChild(input);
        oldPrompt.parentNode.removeChild(oldPrompt);
        input = oldLine;
        	
        if ( command == '' ) {
        	insertList([input, prompt, inputLine]);
        }
        else {
        	var output = document.createElement("div");
        	if (commandList.includes(command)){
        		window[command](output);
        	}
        	else {
        		output.innerHTML = "command not found: " + command;
        	}
        	insertList([input, output, prompt, inputLine]);
        }
        lineNumber += 1;
        inputLine.focus();
    }
}

function insertAfter(newElement, oldElement){
	return oldElement.parentNode.insertBefore(newElement, oldElement.nextSibling);
}

function insertList(elements){
	// first element in list must be existing html tag
	for (i = 0; i < elements.length - 1; i++) {
		insertAfter(elements[i+1], elements[i]);
	}
}


