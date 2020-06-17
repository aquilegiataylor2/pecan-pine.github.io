var commandList = ['hi', 'bye', 'help'];

function help(output) {
	var commands = "Here is a list of available commands: <br>";
	for (i = 0; i < commandList.length; i++){
		commands += commandList[i] + "<br>";
	}
	output.innerHTML = commands;
}

function hi(output){
	output.innerHTML = "Hello, there!";
}

function bye(output){
	output.innerHTML = "Goodbye!";
}
