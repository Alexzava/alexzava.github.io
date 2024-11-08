const noSpamValue = "bWFpbEBhbGV4emF2YS5jb20="
const animatedTextStrings = [
	"Web Developer",
	"Backend Developer",
	"Full Stack Developer"
];
var animatedTextCounter = 0
var carouselLen = 4

var experiencesCarousel
var contactModal

window.onload = () => {
	// Main section animated text
	let infoAnimatedText = document.getElementById("info-animated-text")
	let infoAnimatedBox = document.getElementById("info-animated-box")
	if(infoAnimatedText && infoAnimatedBox) { 
		infoAnimatedBox.style.width = infoAnimatedText.getBoundingClientRect().width + "px"
		infoAnimatedBox.style.height = infoAnimatedText.getBoundingClientRect().height + "px"

		setInterval(() => { textScrollAnimation(infoAnimatedText) }, 3000)
	}

	experiencesCarousel = document.querySelector('#experiences-carousel')

	experiencesCarousel.addEventListener('slid.bs.carousel', event => {
		carouselSetNextItem()
		let counter = event.to + 1
		let carouselCounterEl = document.getElementById("carousel-counter")
		carouselCounterEl.textContent = counter + "/" + carouselLen
	})

	contactModal = document.querySelector('#contact-modal')
	contactModal.addEventListener('hidden.bs.modal', event => {
		let modalBody = document.querySelector("#contact-modal-body")
		modalBody.textContent = ""
	})
	contactModal.addEventListener('show.bs.modal', event => {
		let modalBody = document.querySelector("#contact-modal-body")
		modalBody.textContent = window.atob(noSpamValue)
	})

	let copyEmailButton = document.querySelector("#copy-email-button")
	copyEmailButton.onclick = () => {
		if(navigator.clipboard) {
			let modalBody = document.querySelector("#contact-modal-body")
			navigator.clipboard.writeText(window.atob(noSpamValue))
			modalBody.textContent = "Email copied!"
		}
	}
}

function carouselSetNextItem() {
	let items = document.getElementsByClassName("carousel-item")
	let itemNext;
	for(let i = 0; i < items.length; i++) {
		if(items[i].classList.contains("active")) {
			if(i+1 == items.length) {
				itemNext = items[0]
			} else {
				itemNext = items[i+1]
			}
			break
		}
	}
	document.getElementsByClassName("carousel-next-item")[0].classList.remove("carousel-next-item")
	itemNext.classList.add("carousel-next-item")
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

function scrollToTop() {
	window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}