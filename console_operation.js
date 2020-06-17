
 function FocusOnInput(){ document.getElementById("text").focus(); }
 function hello(){ document.currentScript.parentElement.innerHTML = "hello hello"; }
 var i = 0;
 function execute(ele) {
    if(event.key === 'Enter') {
    	i += 1;
        var newText = document.createElement("input");
        newText.setAttribute("type", "text");
        newText.setAttribute("id", "text" + i);
        newText.setAttribute("onkeydown", "execute(this)");
        if (i == 1){
        	var oldText = document.getElementById("text");
        }
        else {
        	var id = "text" + (i-1).toString();
        	var oldText = document.getElementById(id);
        	//console.log(oldText);
        	//console.log(id);
        }
        var command = oldText.value;
        if ( command != '' ) {
        	var output = document.createElement("div");
        	output.innerHTML = "command not found: " + command;
        	oldText.parentNode.insertBefore(output, oldText.nextSibling);
        	output.parentNode.insertBefore(newText, output.nextSibling);
        }
        else {
        //document.body.insertBefore(newText, oldText);
        oldText.parentNode.insertBefore(newText, oldText.nextSibling);
        }
        newText.focus();
    }
}
