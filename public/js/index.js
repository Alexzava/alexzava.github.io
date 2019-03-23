function daynight() {
	var hr = (new Date()).getHours();
	if(hr > 6 && hr < 19)
		document.body.style = "background-color: #FFF; color: #000;";
	else
		document.body.style = "background-color: #000; color: #FFF;";
}

btcaddress.onclick = function(e) {
	var old = btcaddress.innerHTML;
	btcaddress.innerHTML = btcaddress.getAttribute("address");
	btcaddress.setAttribute("address", old);
};

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if(navigator.appVersion.indexOf('Android') != -1 || navigator.appVersion.indexOf('iPhone') != -1 || w < 415)
	relay_fingerprint.innerHTML = "Fingerprint";


