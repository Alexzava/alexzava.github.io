var scenes = [
	'<span class="baffle">ALEX</span> <span class="black baffle">ZAVA</span>',
	'<span class="black baffle">Digital Humanities</span> <span class="buffle">student</span>',
	'<i class="fa fa-map-marker black" aria-hidden="true"></i> <span class="baffle">University of Pisa</span>'
];
var actualScene = 0;
var maxScene = scenes.length;

function switchScene() {
	if(actualScene >= maxScene)
		actualScene = 0;

	document.getElementById("mainText").innerHTML = scenes[actualScene];
	actualScene++;

	const text = baffle('.baffle');
	text.set({
	  characters: '!/|~#.^+*$#0123',
	  speed: 100
	});

	text.start();
	text.reveal(3000);
}

window.onload = function() {
	switchScene();
};

mainText.onclick = function (e) {
	switchScene();
	document.getElementById("reminder").style = "display: none";
} 

reminder.onclick = function (e) {
	document.getElementById("desktopReminder").innerHTML = "Not me :/";
} 