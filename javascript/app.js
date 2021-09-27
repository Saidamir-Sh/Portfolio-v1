
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
