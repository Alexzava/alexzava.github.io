var speed = 80;
var elements = document.getElementsByClassName("obfuscate");

for(var i = 0; i < elements.length; i++) 
{
	elements[i].setAttribute("msg", btoa(elements[i].innerHTML));
	elements[i].innerHTML = random_str(elements[i].innerHTML.length);
}

function start() {
	daynight();
	setInterval(deobfs, speed);
}

var j = 0;
var x = 0;
function deobfs() {
	if(x < elements.length)
	{
		if(j >= elements[x].innerHTML.length)
		{
			x++;
			j = 0;
		}
		else
		{
			var el = elements[x];
			var msg = atob(el.getAttribute("msg"));
			el.innerHTML = el.innerHTML.replaceAt(j, msg[j]);
			j++;
		}
	}
}

String.prototype.replaceAt=function(index, replacement) {
	return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function random_str(len) {
	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$?@#()[]{}▌";
	var str = "";
	for(var i = 0; i < len; i++)
	{
		var r = Math.floor(Math.random() * alpha.length);
		str += alpha[r];
	}
	return str;
}

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

xmraddress.onclick = function(e) {
	var old = xmraddress.innerHTML;
	xmraddress.innerHTML = xmraddress.getAttribute("address");
	xmraddress.setAttribute("address", old);
};

//Responsive
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if(navigator.appVersion.indexOf('Android') != -1 || navigator.appVersion.indexOf('iPhone') != -1 || w < 415)
	relay_fingerprint.innerHTML = "Fingerprint";


