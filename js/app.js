const noSpamValue = "bWFpbEBhbGV4emF2YS5jb20="
const animatedTextStrings = [
	"Web Developer",
	"Backend Developer",
	"Full Stack Developer"
];
var animatedTextCounter = 0

window.onload = () => {
	// Navbar menu button
	let menuButton = document.getElementById("menu-btn")
	let mobileMenuButton = document.getElementById("mobile-menu-btn")
	if(menuButton && mobileMenuButton) {
		menuButton.onclick = toggleNavigation
		mobileMenuButton.onclick = toggleNavigation
	}

	// Main section animated text
	let infoAnimatedText = document.getElementById("info-animated-text")
	let infoAnimatedBox = document.getElementById("info-animated-box")
	if(infoAnimatedText && infoAnimatedBox) { 
		infoAnimatedBox.style.width = infoAnimatedText.getBoundingClientRect().width + "px"
		infoAnimatedBox.style.height = infoAnimatedText.getBoundingClientRect().height + "px"

		setInterval(() => { textScrollAnimation(infoAnimatedText) }, 3000)
	}

	// Animate horizontal scroll section
	let section = document.querySelector('#projects')
	let wrap = document.querySelector('.horizontal-container')
	wrap.animate({
		transform: ['', 'translateX(calc(-100% + 100vw))'],
	},{
		timeline: new ViewTimeline({
			subject: section,
			axis: 'block',
		}),
		fill: 'forwards',
		rangeStart: 'contain 0%',
		rangeEnd: 'contain 100%',
	})
}

function textScrollAnimation(element) {
	$("#" + element.id).css({position: "absolute"}).animate({
		opacity: 0,
		top: 20
	}, 1000, () => {
		if(animatedTextCounter >= animatedTextStrings.length) {
			animatedTextCounter = 0
		}

		element.textContent = animatedTextStrings[animatedTextCounter]
		animatedTextCounter++

		$("#" + element.id).css({top: -20}).animate({opacity: 1, top: 0}, 1000)
	})
}

function toggleNavigation() {
	let menuButton = document.getElementById("menu-btn")
	let mobileMenuIcon = document.getElementById("mobile-menu-icon")
	let navigation = document.getElementById("navigation")
	if(window.getComputedStyle(navigation, null).display == "none") {
		// Menu Button
		let dataAlt = menuButton.textContent
		menuButton.textContent = menuButton.getAttribute("data-alt")
		menuButton.setAttribute("data-alt", dataAlt)

		// Mobile Menu Button
		mobileMenuIcon.classList.remove("iconoir-menu")
		mobileMenuIcon.classList.add("iconoir-xmark")

		// Show navigation
		$("#" + navigation.id).css("display", "flex").hide().fadeIn()
	} else {
		// Menu Button
		let dataAlt = menuButton.textContent
		menuButton.textContent = menuButton.getAttribute("data-alt")
		menuButton.setAttribute("data-alt", dataAlt)

		// Mobile Menu Button
		mobileMenuIcon.classList.remove("iconoir-xmark")
		mobileMenuIcon.classList.add("iconoir-menu")
		
		$("#" + navigation.id).fadeOut()
	}
}

function scrollToTop() {
	toggleNavigation()
	window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

function noSpam(e) {
	e.onclick = ""
	e.href = "mailto:" + window.atob(noSpamValue)
}