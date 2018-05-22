// script for adding "clicked" class when toggle menu button is clicked
$('.toggleButton').on('click', function(){
  $(this).toggleClass('clicked');
  var e = document.getElementsByClassName('welcome2');
  if($(this).hasClass('clicked')){
    e[0].style.display = 'none';
  }
  else{
    e[0].style.display = 'block';
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
}

setTimeout(welcomeTransition,3000);
