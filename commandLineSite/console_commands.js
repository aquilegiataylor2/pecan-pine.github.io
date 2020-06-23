// commands in separate files:
// resume (resume.js)
// education (education.js)

var commandList = ['hi', 'bye', 'help', 'resume', 'education', 'languages','skills', 'about', 'contact', 'puzzle', 'orbit'];

function puzzle(){
    window.location = "../puzzleSite/puzzle.html";
}

function orbit(){
    window.location = "../orbit.html";
}

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


