// commands in separate files:
// resume (resume.js)
// education (education.js)

var commandList = ['hi', 'bye', 'help', 'resume', 'education', 'languages','skills', 'about', 'contact'];

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

function contact(output){
    output.innerHTML = `
    <div> Contact Information:</div>
    <div>Nathan Taylor</div>
    <div>pecan dot pine at gmail dot com</div>
    <div>https://github.com/pecan-pine</div>
    <div>https://pecan-pine.github.io/</div>
    `;
}

function about(output){
    output.innerHTML = `
    <div>About me</div>
    <div>
    Hi, I'm Nathan Taylor. I am an aspiring software developer currently looking for work! 
    
    </div><br><div>Besides programming, my background is in Pure Mathematics (two Master's degrees, five years of graduate-level work), in automotive repair (I fix most issues on my own cars; I worked for a Ford dealership last year, and took some classes on diesel truck repair), and basic electronics. </div>
    <br>
    <div>
    I'm looking for a position somewhere in Oregon, ideally in the Corvallis / Salem area. I'm more than happy to talk about opportunities or general networking. Thanks!
    </div>
    <br>
    <div>About the name Pecan Pine:</div>
    <div>The name pecan pine comes from "pecan pie"--the Southern dessert, together with pine, i.e. pine tree. The name juxtaposes my Southern heritage (my extended family is from the South) with where I grew up (in the foothills of California, where there are lots of pine trees).</div>
    `;
}

