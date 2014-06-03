
var container = document.getElementById('showImg');

var elements = document.getElementsByClassName('galeria');

var _close = document.getElementById('close');

_close.onclick = function (e){
	e.preventDefault();
	hidePop();
}

for(var e in elements){

	elements[e].onclick = function(e){
		el = e.target;
		container.getElementsByTagName('img')[1].src = el.src;
		showPop();
	}

}

function showPop () {
	container.style.display = 'block';
	window.scrollTo(0,500);
}

function hidePop () {
	container.style.display = 'none';
}