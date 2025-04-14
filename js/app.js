const noSpamValue = "bWFpbEBhbGV4emF2YS5jb20=";
const animatedTextStrings = [
	"Web Developer",
	"Backend Developer",
	"Software Developer",
	"Freelance Developer"
];
var animatedTextCounter = 0;

window.onload = () => {
	// Init AOS
	AOS.init({
		duration: 800,
		once: false,
		mirror: false,
	});

	// Init GSAP plugin
	gsap.registerPlugin(ScrollTrigger);

	// Contact modal
	let contactModal = document.querySelector('#contact-modal');
	contactModal.addEventListener('hidden.bs.modal', event => {
		let modalBody = document.querySelector("#contact-modal-body")
		modalBody.textContent = ""
	});
	contactModal.addEventListener('show.bs.modal', event => {
		let modalBody = document.querySelector("#contact-modal-body")
		modalBody.textContent = window.atob(noSpamValue)
	});
	let copyEmailButton = document.querySelector("#copy-email-button");
	copyEmailButton.onclick = () => {
		if(navigator.clipboard) {
			let modalBody = document.querySelector("#contact-modal-body");
			navigator.clipboard.writeText(window.atob(noSpamValue));
			modalBody.textContent = "Email copied!";
		}
	};

	// Gallery section
	gsap.utils.toArray(".scroll-gallery").forEach((section, index) => {
	    const w = section.querySelector(".wrapper");
	    const [x, xEnd] =
	    	index % 2 ?
	    	["100%", (w.scrollWidth - section.offsetWidth) * -1] :
	    	[w.scrollWidth * -1, 0];
		gsap.fromTo(
			w,
			{ x },
			{
				x: xEnd,
				scrollTrigger: {
					trigger: section,
					scrub: 0.5 
				} 
		});
  	});

	// Floating button
  	gsap.to(".floating", {
  		scrollTrigger: {
  			trigger: "#about",
  			start: "center top",
  			toggleActions: "restart none none reverse",
  		},
  		visibility: "visible"
  	});

	// Animated text cover section
	let infoAnimatedText = document.getElementById("info-animated-text");
	let infoAnimatedBox = document.getElementById("info-animated-box");
	if(infoAnimatedText && infoAnimatedBox) { 
		infoAnimatedBox.style.width = infoAnimatedText.getBoundingClientRect().width + "px";
		infoAnimatedBox.style.height = infoAnimatedText.getBoundingClientRect().height + 10 + "px";
		setInterval(() => { textScrollAnimation(infoAnimatedText) }, 4000);
	}

	// Hide preloader
	preloader.setAttribute("data-aos", "fade-out");

	// Start title animation
	animateTextGSAP("#cover-title-1", () => {});
	animateTextGSAP("#cover-title-2", () => {
		// Other animations
		gsap.to(".cover-title-line-bottom", {
			duration: 1,
			scale: 1.1,
			ease: "elastic",
			repeat: -1,
			yoyo: true,
			repeatDelay: 5
		});

		gsap.to(".cover-title-line-top", {
			duration: 1,
			scale: 1,
			ease: "elastic",
			repeat: -1,
			yoyo: true,
			repeatDelay: 5,
			delay: 1
		});
	});
}

function animateTextGSAP(element, onComplete) {
	var newText = "";
	var theText = document.querySelector(element);
	for (i = 0; i < theText.innerText.length; i++) {
		newText += "<div>";
		if (theText.innerText[i] == " "){newText += "&nbsp;"}
		else {newText += theText.innerText[i];}
		newText += "</div>";
	}
	theText.innerHTML = newText;
	gsap.fromTo(element+" div", {
		opacity:0, 
		y:90
	}, 
	{
		duration: 2, 
		opacity:1, 
		y:0, 
		stagger: 0.03, 
		ease: "elastic(1.2, 0.5)",
		scrollTrigger: {
			trigger: element,
			start: "top 70%",
			toggleActions: "restart none none none"
		},
		onComplete: onComplete,
	});
}

function textScrollAnimation(element) {
	$("#" + element.id).css({position: "absolute"}).animate({
		opacity: 0,
		top: 20
	}, 1000, () => {
		if(animatedTextCounter >= animatedTextStrings.length) {
			animatedTextCounter = 0;
		}

		element.textContent = animatedTextStrings[animatedTextCounter];
		animatedTextCounter++;

		$("#" + element.id).css({top: -20}).animate({opacity: 1, top: 0}, 1000);
	});
}