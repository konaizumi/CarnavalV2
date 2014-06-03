
var container = document.getElementById('showImg');

var elements = document.getElementsByClassName('galeria');

var _close = document.getElementById('close');

_close.onclick = function (e){
	console.log(e, e.preventDefault);
	e.preventDefault();
	hidePop();
}

console.log(elements, _close, container);

for(var e in elements){

	elements[e].onclick = function(e){
		el = e.target;
		console.log(el);

		container.getElementsByTagName('img')[0].src = el.src;
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