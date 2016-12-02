/*
//////////////////////////////////////////////////////////////////////////////////
Loader
//////////////////////////////////////////////////////////////////////////////////
*/
$( window ).load(function() {
  $('#loader').fadeOut(800);
});

/*
//////////////////////////////////////////////////////////////////////////////////
Smooth Scroll
//////////////////////////////////////////////////////////////////////////////////
*/


/*
//////////////////////////////////////////////////////////////////////////////////
Wow.js Initialization
//////////////////////////////////////////////////////////////////////////////////
*/
  new WOW().init();

/*
 //////////////////////////////////////////////////////////////////////////////////
 Owl Crousel
 //////////////////////////////////////////////////////////////////////////////////
 */
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    animateOut:"fadeInDown",
    animateIn: "fadeInUp",
    stagePadding:30,
    smartSpeed:450


  });

});

$(".mainnav li").click(function () {
$('.navbar-toggle').click();
})

$(".image6").mouseover(function(){
  $(this).effect( "bounce", {times:1}, 550 );
});


$(".boost-image").mouseover(function () {
  $(this).fadeTo('slow', 0.5, function () {
  })
})
$(".boost-image").mouseleave(function () {
  $(this).fadeTo('slow', 0.8, function () {
  })
})
$(".boost-heading").mouseover(function () {
  $(this).animate({
    fontSize : '50px'
  }, 800)
})

$(".boost-heading").mouseleave(function () {
  $(this).animate({
    fontSize : '25px'
  }, 800)
})




