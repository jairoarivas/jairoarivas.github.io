// script for adding "clicked" class when toggle menu button is clicked
$('.toggleButton').on('click', function(){
  $(this).toggleClass('clicked');
});

function removeAfter4seconds(){
  var e = document.getElementById('welcomeDiv');
  e.style.display ='none';
  var b = document.getElementById('togButton');
  b.style.display ='block';
}

setTimeout(removeAfter4seconds,4000);
