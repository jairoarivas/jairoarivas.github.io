// rest of site is a class used to transition between nav menu and page
var g = document.getElementsByClassName('restOfSite');
g[0].style.display = 'none';

// script for adding "clicked" class when toggle menu button is clicked

$('.toggleButton').on('click', function(){
  $(this).toggleClass('clicked');
  var e = document.getElementsByClassName('welcome2');
  var r = document.getElementsByClassName('restOfSite');
  if($(this).hasClass('clicked')){
    e[0].style.display = 'none';
    r[0].style.display = 'none';
  }
  else{
    e[0].style.display = 'block';
    r[0].style.display = 'block';
  }
});

function welcomeTransition(){
  var e = document.getElementById('welcomeDiv');
  e.style.display ='none';
  var b = document.getElementById('togButton');
  b.style.display ='block';
  var w = document.getElementById('welcomeDiv2');
  w.style.display ='block';
  $(w).toggleClass('welcomeOver');
  var s = document.getElementsByClassName('welcome2');
  s[0].style.display = 'block';
  var r = document.getElementsByClassName('restOfSite');
  r[0].style.display = 'block';
}

setTimeout(welcomeTransition,3000);
