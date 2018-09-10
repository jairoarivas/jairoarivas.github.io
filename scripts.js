// rest of site is a class used to transition between nav menu and page
var g = document.getElementsByClassName('restOfSite');
for(var i =0; i < g.length; i++){
  g[i].style.display = 'flex';
}

// var r = document.getElementsByClassName('restOfSite');
// for(var i =0; i < g.length; i++){
//   r[i].style.display = 'flex';
// }
// // animating cards when hovering
// $('.cardDes').hover(function(){
//     var x = $(this).prev();
//     x.addClass('animate');
// },function(){
//     var x = $(this).prev();
//     x.removeClass('animate');
// });
// $('.card1Image').hover(function(){
//     var x = $(this);
//     x.addClass('animate');
// },function(){
//     var x = $(this);
//     x.removeClass('animate');
// });
// $('.card2Image').hover(function(){
//     var x = $(this);
//     x.addClass('animate');
// },function(){
//     var x = $(this);
//     x.removeClass('animate');
// });
// $('.card3Image').hover(function(){
//     var x = $(this);
//     x.addClass('animate');
// },function(){
//     var x = $(this);
//     x.removeClass('animate');
// });

// script for adding "clicked" class when toggle menu button is clicked

$('.toggleButton').on('click', function(){
  // var e = document.getElementsByClassName('welcome2');
  var r = document.getElementsByClassName('restOfSite');
  $(this).toggleClass('clicked');
  if($(this).hasClass('clicked')){
    // e[0].style.display = 'none';
    for(var i =0; i < r.length; i++){
      r[i].style.display = 'none';
    }
  }
  else{
    // e[0].style.display = 'block';
    for(var i =0; i < r.length; i++){
      r[i].style.display = 'flex';
    }
  }
});

// function welcomeTransition(){
//   // var e = document.getElementById('welcomeDiv');
//   // e.style.display ='none';
//   var b = document.getElementById('togButton');
//   b.style.display ='block';
//   // var w = document.getElementById('welcomeDiv2');
//   // w.style.display ='block';
//   // $(w).toggleClass('welcomeOver');
//   // var s = document.getElementsByClassName('welcome2');
//   // s[0].style.display = 'block';
//   var r = document.getElementsByClassName('restOfSite');
//   for(var i =0; i < g.length; i++){
//     r[i].style.display = 'flex';
//   }
// }

// setTimeout(welcomeTransition,3000);
