
function skills(output){
    output.innerHTML = `
        <!-- Skills Section -->
	<div class="w3-row w3-padding-64" id="resume">
		<h2>Skills</h2>
		<ul class="bar-graph">
  <li class="bar-graph-axis">
    <div class="bar-graph-label">Know-it-all</div>
    <div class="bar-graph-label">Fairly Confident</div>
    <div class="bar-graph-label">Get done what I need to</div>
    <div class="bar-graph-label">Just the Basics</div>
    <div class="bar-graph-label"></div>
  </li>
  
    <li class="bar current" style="height: 70%;">
    <div class="description">Python</div>
  </li>
  <li class="bar current" style="height: 65%;">
    <div class="description">Bash</div>  
  </li>
  <li class="bar offnon" style="height: 55%;">
    <div class="description">SQL</div>
  </li>
	<li class="bar current" style="height: 40%;">
    <div class="description">Git / GitHub</div>
  </li>
	<li class="bar offnon" style="height: 20%;">
    <div class="description">HTML / CSS</div>
  </li>
   <li class="bar current" style="height:30%">
    <div class="description">JavaScript</div>
   </li> 
	<li class="bar offnon" style="height: 5%;">
    <div class="description">Machine Learning</div>
  </li>
  <li class="bar offnon" style="height: 35%;">
    <div class="description">C++ / C#</div>
  </li>
  <li class="bar longwhile" style="height: 10%;">
    <div class="description">Ruby</div>
  </li>
  <li class="bar longwhile" style="height: 10%;">
    <div class="description">Haskell</div>
  </li>
    <li class="bar longwhile" style="height: 50%;">
    <div class="description">Excel</div>
  </li>
</ul>

<ul class="legend">
    <li><span class="current"></span> Currently Working In</li>
    <li><span class="offnon"></span> Off And On</li>
    <li><span class="longwhile"></span>It's Been Awhile</li>
</ul>
</div>
    `;
}
