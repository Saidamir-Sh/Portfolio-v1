
var circle = document.querySelector(".circle");
var aTags = document.getElementsByTagName('A');

/* Corner Text */
document.addEventListener('mousemove', parallaxText);
function parallaxText(e) {
  this.querySelectorAll('.layer').forEach((layer) => {
    let x = (window.innerWidth - e.pageX * 2) / 2;
    layer.style.transform = `translateX(${x}px)`;
  });
}


/* Cursor Circle */
document.addEventListener('mousemove', function(e) {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
})

/* Hiding scrollbar while loading screen  */
setTimeout(() => {
  document.querySelector('.body').style.overflowY = 'scroll'
}, 5000)


/* smooth scrolling */
// function init(){
// 	new SmoothScroll(document, 150,5)
// }
// comment out : causing not to scroll on other browsers
function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
    
		var delta = (pos - target.scrollTop) / smooth
    
		target.scrollTop += delta
    
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}