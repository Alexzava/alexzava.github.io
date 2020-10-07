var nospam = "bWFpbEBhbGV4emF2YS5jb20="; 
var menu = false;

window.onload = function() {
	// Hide loader
	document.getElementById("loader").style = "display: none;";

	let title = document.getElementById("main-title");
	if(title) {
		title.classList.add("animate-neon");
	}

	var currentdate = new Date();
	if((currentdate.getHours() > 19 && currentdate.getHours() <= 23) || (currentdate.getHours() >= 0 && currentdate.getHours() < 8)) {
		console.log("Good night");
		document.body.style.backgroundImage = "linear-gradient(30deg, #cc2b5e, #753a88)";
	}
};

function antiSpam(e) {
	e.onclick = "";
	e.href = "mailto:" + window.atob(nospam);
}

function toggleMenu() {
	$('#menu').fadeToggle("slow", "linear");

	if(menu) {
		menu = false;
		document.getElementById("openMenu").style = "display: block;";
		document.getElementById("closeMenu").style = "display: none;";
	}
	else {
		menu = true;
		document.getElementById("openMenu").style = "display: none;";
		document.getElementById("closeMenu").style = "display: block;";

	}
}

/*function menuGoTo(element) {
	toggleMenu();
	document.querySelector(element).scrollIntoView();
}*/