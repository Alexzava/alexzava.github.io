var nospam = "bWFpbEBhbGV4emF2YS5jb20="; 
var menu = false;


window.onload = function() {
	// Hide loader
	document.getElementById("loader").style = "display: none;";

	var title = document.getElementById("main-title");
	title.classList.add("animate-neon");
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

function menuGoTo(element) {
	toggleMenu();
	document.querySelector(element).scrollIntoView();
}