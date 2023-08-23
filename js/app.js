const noSpamValue = "bWFpbEBhbGV4emF2YS5jb20="

window.onload = function() {
	VanillaTilt.init(document.querySelector(".tilt"), {
		max: 10,
		speed: 60
	})

	let b = baffle('.obfuscate', {
		speed: 80,
		characters: "$#/*+{}[]-_&%!?<>",
	}).start()

	$("#loader").fadeToggle("slow", () => {
		b.reveal(4000)
	})
}

function noSpam(e) {
	e.onclick = ""
	e.href = "mailto:" + window.atob(noSpamValue)
}