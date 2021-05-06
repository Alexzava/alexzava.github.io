var nospam = "bWFpbEBhbGV4emF2YS5jb20=";
var menu = false;
var cyberMode = false;

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

/*function enableCyberMode() {
	if(cyberMode) {
		document.body.classList.remove("cyber");
		cyberMode = false;
	} else {
		document.body.classList.add("cyber");
		let b = baffle('.obfuscate', {
			speed: 80,
			characters: "█▒▓░ ░▒▓▒ █▒▓ ██/▓ ▒<▓▓░ ░░▓ ▓█/░░ ▒░█░░ ▒░▒",
		}).start();
		b.reveal(4000);
		cyberMode = true;
	}
}*/

/* XMAS */
/*function rainDrops(size, element) {
	var posArr = [];
	var lastDelay = 0;
	while(posArr.length < size){
	    var pos = Math.floor(Math.random() * 99);
	    if(posArr.indexOf(pos) === -1) {
	    	posArr.push(pos);

			let delay = lastDelay;
			while(delay === lastDelay) {
				delay = Math.random() * 8;
			}
			lastDelay = delay;

			console.log(delay);

			let drop = document.createElement('div');
			drop.classList.add("rain-drop");
			drop.style.left = pos + "vw";
			drop.style.animationDelay = "-" + delay + "s";

			element.append(drop);
	    }
	}
}*/

/*function placeSanta() {
	let innerTitle = document.getElementById("innerTitle");
	let santa = document.getElementById("santa");
	if(innerTitle && santa) {
		let titleRect = innerTitle.getBoundingClientRect();
		let santaRect = santa.getBoundingClientRect();

		let santaX = titleRect.x - (santaRect.height / 2);
		let santaY = titleRect.y - (santaRect.width / 3);

		santa.style.left = santaX + "px";
		santa.style.top = santaY + "px";
		santa.style.transform = "rotate(-20deg)";
	}
}*/