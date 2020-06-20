
var center = [300, 200];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ellipsePos(element, xCenter, yCenter, xRadius, yRadius){
    function positionMe (angle){
        angle = angle / 100;
        var xCoord = xCenter + xRadius * Math.cos(angle);
        var yCoord = yCenter + yRadius * Math.sin(angle);
        element.style.left = xCoord.toString() + "px";
        element.style.top = yCoord.toString() + "px";
        angle = angle % (2 * Math.PI);
        if ( Math.abs(angle) < .01 ){
            element.style.zIndex = 10;
        }
        if (Math.abs(angle - Math.PI) < .01){
            element.style.zIndex = -10;
        }
    }
    return positionMe;
}

function uniformOrbit(element){
    return ellipsePos(element, center[0] + 50, center[1] + 50, 150, 50)
}

async function onload(){

    // get rotating elements
    var resume = document.getElementById("resume");
    var octocat = document.getElementById("octocat");
    var planet = document.getElementById("planet");
    var linkedin = document.getElementById("linkedin");
    var planetOrbital = document.getElementById("planetOrbital");
    
    
    planetOrbital = ellipsePos(planetOrbital, -120, 70, 225, 40);
	catOrbit = uniformOrbit(octocat);
    resOrbit = uniformOrbit(resume);
    linOrbit = uniformOrbit(linkedin);
    linkedin.style.zIndex = -10;
    resume.style.zIndex = 10;
    planet.style.left = center[0].toString() + "px";
    planet.style.top = center[1].toString() + "px";	
       
       
    for (i = 0; i < 10000; i++){
        // this line makes the planet rotate around the sun
        // comment out for the planet to be in upper right corner
        planetOrbital(i);
        
        // the rotating links are 1/3 rotation apart from each other
        catOrbit(i);
        resOrbit(i + 100 * 2 * Math.PI / 3);
        linOrbit(i + 100 * 4 * Math.PI / 3);

        await sleep(20);
       }
}
