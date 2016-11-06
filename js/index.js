/*
  Esta linea permite que salga sideNav con el menu movil
*/
$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();

/*
  Este codigo crea el efecto de la imagen de inicio
  Inspired by Filippo Bello's Portfolio
  https://github.com/codrops/SegmentEffect/
*/
document.documentElement.className = 'js';

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('.flip').click(function(){
  console.log("flip");
  $('.cont-flip').toggleClass('flipped');
  return false;
});
/*
 Esta seccion contiene el codigo que se encarga de los efectos cuando se hace scroll en la pagina.
*/
$('#element1').css('opacity', 0);
$('#element2').css('opacity', 0);
$('#element3').css('opacity', 0);
$('#element4').css('opacity', 0);
$('.bienvenidos').css('opacity', 0);
$('.cont-contactBtn').css('opacity', 0);
$('.card-container').css('opacity', 0);

$('.bienvenidos').waypoint(function() {
    $('.bienvenidos').addClass('animated fadeInUp');
    $('.bienvenidos').css('opacity', 1);
}, { offset: '50%' });

$('.cont-contactBtn').waypoint(function() {
    $('.cont-contactBtn').addClass('animated fadeInDown');
    $('.cont-contactBtn').css('opacity', 1);
}, { offset: '50%' });

$('#element1').waypoint(function() {
    $('#element1').addClass('animated zoomIn');
    $('#element1').css('opacity', 1);
}, { offset: '50%' });

$('#element2').waypoint(function() {
    $('#element2').addClass('animated zoomIn');
    $('#element2').css('opacity', 1);
}, { offset: '50%' });

$('#element3').waypoint(function() {
    $('#element3').addClass('animated fadeInLeft');
    $('#element3').css('opacity', 1);
}, { offset: '50%' });

$('#element4').waypoint(function() {
    $('#element4').addClass('animated fadeInRight');
    $('#element4').css('opacity', 1);
}, { offset: '50%' });

$('.card-container').waypoint(function() {
    $('.card-container').addClass('animated zoomIn');
    $('.card-container').css('opacity', 1);
}, { offset: '50%' });

$("#siguenos").waypoint(function() {
  $("#siguenos").animateCss('rubberBand');
}, { offset: '100%' });
