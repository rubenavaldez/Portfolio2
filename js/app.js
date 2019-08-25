$(document).ready(function(){
    $('.parallax').parallax();
    console.log ("ready")
    $('.carousel').carousel();
    autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
}
});