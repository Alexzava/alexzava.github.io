var nospam = "bWFpbEBhbGV4emF2YS5jb20=";
var menu = false;

window.onload = function() {

	VanillaTilt.init(document.querySelector(".tilt"), {
		max: 10,
		speed: 60
	});

	// Hide loader
	document.getElementById("loader").style = "display: none;";

	let title = document.getElementById("main-title");
	if(title) {
		title.classList.add("animate-neon");
	}

	runBaffle();
};

function antiSpam(e) {
	e.onclick = "";
	e.href = "mailto:" + window.atob(nospam);
}

function toggleMenu() {
	$('#menu').fadeToggle("slow", "linear");

	let menuBtn = document.getElementById("menu-btn");
	if(menuBtn) {
		if(menu) {
			menu = false;
			menuBtn.textContent = "";
			let ic = document.createElement("i");
			ic.classList.add("fas", "fa-bars");
			menuBtn.appendChild(ic);
		}
		else {
			menu = true;
			menuBtn.textContent = "";
			let ic = document.createElement("i");
			ic.classList.add("fa", "fa-times");
			menuBtn.appendChild(ic);
		}
	}
}

function runBaffle() {
	let b = baffle('.obfuscate', {
		speed: 80,
		characters: "█▒▓░ ░▒▓▒ █▒▓ ██/▓ ▒<▓▓░ ░░▓ ▓█/░░ ▒░█░░ ▒░▒",
	}).start();
	b.reveal(4000);
}