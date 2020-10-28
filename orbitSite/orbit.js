
// starting point for coordinate calculation
var center = [300, 200];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ellipsePos outputs a function which changes an element's position based
// on the angle (angle) which is input. 
function ellipsePos(element, xCenter, yCenter, xRadius, yRadius){

    // the output function
    function positionMe (angle){
    
        // slow down the animation
        angle = angle / 100;
        
        // calculate coordinates, and set element position
        var xCoord = xCenter + xRadius * Math.cos(angle);
        var yCoord = yCenter + yRadius * Math.sin(angle);
        element.style.left = xCoord.toString() + "px";
        element.style.top = yCoord.toString() + "px";
        
        // adjust z-index depending on where the element is
        // in its rotational arc
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

// ellipseSlant outputs a which changes an element's position based
// on the angle (angle) which is input. 
function ellipseSlant(element, xCenter, yCenter, xRadius, yRadius){

    // the output function
    function positionMe (angle, slant){
    
        // slow down the animation
        angle = angle / 100;
        
        // calculate coordinates, and set element position
        var xCoord = xRadius * Math.cos(angle) * Math.cos(slant) - yRadius * Math.sin(angle) * Math.sin(slant);
        var yCoord = xRadius * Math.cos(angle) * Math.sin(slant) + yRadius * Math.sin(angle) * Math.cos(slant);
        xCoord += xCenter;
        yCoord += yCenter;
        element.style.left = xCoord.toString() + "px";
        element.style.top = yCoord.toString() + "px";
        
        // adjust z-index depending on where the element is
        // in its rotational arc
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

// orbit that looks good for the rotating links
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
    var bluePlanet = document.getElementById("bluePlanet");
    var otherPlanet = document.getElementById("otherPlanet");
    
    planetOrbital.style.opacity = 1;
    
    blueOrbit = ellipseSlant(bluePlanet, center[0] - 185, center[1] - 40, 190, 45);
    //otherOrbit = ellipseSlant(otherPlanet, center[0] - 175, center[1] - 50, 200, 40, Math.PI / 4);
    
    // planetOrbital becomes a function which re-positions the entire div 
    // planetOrbital, so that the planet and rotating links rotate
    // around the sun
    planetOrbital = ellipsePos(planetOrbital, -120, 70, 225, 40);

    // the rotating links (functions of angle)
	catOrbit = uniformOrbit(octocat);
    resOrbit = uniformOrbit(resume);
    linOrbit = uniformOrbit(linkedin);
    
    // adjust the z-index of two elements, so they start out on the correct
    // side of the planet
    linkedin.style.zIndex = -10;
    resume.style.zIndex = 10;
    bluePlanet.style.zIndex = 10;
    
    // position planet at "center" coordinates, i.e. top right of screen
    planet.style.left = center[0].toString() + "px";
    planet.style.top = center[1].toString() + "px";	

       
    for (i = 0; i < 10200; i++){
        //blueOrbit(i + 100 * 2 * Math.PI / 3, - Math.PI / 4 + i / 2000);
        blueOrbit(i + 100 * 2 * Math.PI / 3, i / 2000);
        //otherOrbit(i + 100 * 4 * Math.PI / 3);
    
        // this line makes the planet rotate around the sun
        // comment out for the planet to be in upper right corner
        planetOrbital(i);
        
        // the rotating links are 1/3 rotation apart from each other
        catOrbit(i);
        resOrbit(i + 100 * 2 * Math.PI / 3);
        linOrbit(i + 100 * 4 * Math.PI / 3);

        // sleep to give the appearance of animation
        await sleep(20);
       }
}
