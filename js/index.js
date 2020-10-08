var returnTop = document.getElementsByClassName('return-top')[0],
	menu = document.getElementsByClassName('menu')[0],
	secondNav = document.getElementsByClassName('second-nav')[0],
	count = 0;

window.onscroll = function () {
	if (getScrollOffset().y >= 500) {
		this.returnTop.style.opacity = '1';
	} else {
		this.returnTop.style.opacity = '0';
	}
}

returnTop.onclick = function () {
	window.scrollTo(0, 0)
}

menu.onclick = function () {
	count ++;
	if (count % 2 != 0) {
		secondNav.style.height = '350px';
	} else {
		secondNav.style.height = '0px';
	}
}

function getScrollOffset() {
	if (window.pageXOffset) {
		return {
			x: window.pageXOffset,
			y: window.pageYOffset
		}
	} else {
		return {
			x: document.body.scrollLeft + document.documentElement.scrollLeft,
			y: document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}
